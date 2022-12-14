#!/bin/sh -e
# Creates an AppImage with the specified Rust package binary and its dependencies.
# AppImage is an universal Linux application distribution format, similar
# to macOS bundles, which packs an application and its dependencies to
# allow running it across a wide variety of distros with no system changes
# and little user hassle.
#
# Relevant documentation:
# https://docs.appimage.org/packaging-guide/index.html
# https://appimage-builder.readthedocs.io/en/latest/index.html

# The directory where the generated AppImage bundles will be stored.
readonly TARGET_APPIMAGE_DIR='target/appimage'
# The appimage-builder recipe to use to generate the AppImage.
readonly RECIPE="$1"

alias wget='wget -nc -nv --show-progress -P "$APPIMAGE_WORKDIR"'

if ! command -v python3 >/dev/null 2>&1; then
	echo "! Python 3 was not found. Please make sure it is installed and in the PATH variable." >&2
	false
fi

# Create a temporary working directory for this AppImage script
APPIMAGE_WORKDIR=$(mktemp -d -t packsquash-appimagebuild.XXX)
readonly APPIMAGE_WORKDIR
trap '{ rm -rf "$APPIMAGE_WORKDIR" || true; } && { rm -rf appimage-build AppDir || true; }' EXIT INT TERM

# Set up a virtual environment so that we do not pollute the global Python
# packages list with the packages we need to install
echo '> Setting up temporary Python virtual environment'
python3 -m venv "$APPIMAGE_WORKDIR/.venv"
. "$APPIMAGE_WORKDIR/.venv/bin/activate"

echo '> Install appimage-build in temporary Python virtual environment'
pip3 install -r /proc/self/fd/0 <<'REQUIREMENTS'
appimage-builder==1.1.0
certifi==2022.6.15
charset-normalizer==2.1.0
contextlib2==21.6.0
decorator==5.1.1
docker==5.0.3
emrichen==0.2.3
idna==3.3
jsonpath-rw==1.4.0
lief==0.12.1
packaging==21.3
ply==3.11
prompt-toolkit==3.0.30
pyaml==21.10.1
pyparsing==3.0.9
python-gnupg==0.4.9
PyYAML==6.0
questionary==1.10.0
requests==2.28.1
roam==0.3.1
ruamel.yaml==0.17.21
ruamel.yaml.clib==0.2.6
schema==0.7.5
six==1.16.0
urllib3==1.26.11
wcwidth==0.2.5
websocket-client==1.3.3
REQUIREMENTS

echo '> Running appimage-builder'

export TARGET_APPIMAGE_ARCH="${TARGET_APPIMAGE_ARCH:-$(uname -m)}"
export TARGET_APPIMAGE_APT_ARCH="${TARGET_APPIMAGE_APT_ARCH:-$(dpkg-architecture -q DEB_HOST_ARCH)}"
export REPO_DIR="$APPIMAGE_WORKDIR/pkgs"
VERSION="$(git describe --tags --dirty=-custom --always)"
export VERSION

if [ -z "${CI+x}" ]; then
	appimage-builder --recipe "$RECIPE"
else
	# On CI, we run inside a container, and nested containers are a no-go
	appimage-builder --recipe "$RECIPE" --skip-test
fi

echo "> Moving generated AppImage to $TARGET_APPIMAGE_DIR"
mkdir -p "$TARGET_APPIMAGE_DIR"
mv -f ./*.AppImage* "$TARGET_APPIMAGE_DIR"