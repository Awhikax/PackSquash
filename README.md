# PackSquash
A fast Minecraft resource pack lossy compressor. It is able to reduce resource pack ZIP file sizes up to 7 times, which allows for efficient distribution and slightly improved game performance.

## How does it work?
PackSquash analyzes all the resource pack files in a directory, applying file type specific compression techniques to each one. Currently, these techniques are:

* For PNG images: color quantization and palette generation (up to 256 colors), coupled with lossless bit depth, compression and color type reduction techniques. These operations are performed by the well known `imagequant` (used in `pngquant`) and `oxipng` libraries. For Minecraft style textures, up to 16x16 pixels in size, this results in dramatic size savings without any visual quality loss. The space savings also traslate to bigger textures, but they may incur in a slight visual quality loss, depending on how many colors it uses.
* For OGG (and other) audio files: downmixing to mono, resampling to 32 kHz and reencoding with a 40-96 kbit/s bitrate. They are good enough for in-game audio, and may improve game performance. Downmixing to mono also has the added benefit of allowing better 3D sound positioning.
* For JSON files: minification, by removing unneeded whitespace. As a side bonus, because minification requires parsing the JSON first, PackSquash also acts as a JSON file validator.

In addition to these techniques, all files are compressed in the generated ZIP file using the Zopfli algorithm, which is a state of the art DEFLATE encoder made by Google. It is tuned for very high space savings at the cost of performance, but tests with ~200 files resource packs show that it is still fast enough.

## Usage
```
PackSquash 0.1.0
AlexTMjugador
Lossily compresses and prepares Minecraft resource packs for distribution

USAGE:
    packsquash [FLAGS] [OPTIONS] <resource pack directory> [result ZIP file]

FLAGS:
    -c, --compress-compressed    If specified, resource files that are already compressed by design (like PNG and OGG
                                 files) will be losslessly compressed again in the result ZIP file, unless that yields
                                 no significant space savings. This is disabled by default, as it is expected that
                                 compressing already compressed file formats yields marginal space savings that do not
                                 outweigh the time cost
    -o, --zip-obfuscation        If provided, the generated ZIP file will not be able to be read by some common
                                 programs, like WinRAR, 7-Zip or unzip, but will function normally within Minecraft. It
                                 will also not duplicate some metadata in the ZIP file, reducing its size a bit more.
                                 You shouldn't rely on this feature to keep the resources safe from unauthorized
                                 ripping, and there is a low possibility that a future version of Minecraft rejects
                                 these ZIP files. Therefore, it is disabled by default
    -h, --help                   Prints help information
    -n, --skip-pack-icon         If specified, the pack icon in pack.png will be skipped and not included in the
                                 resulting file
    -V, --version                Prints version information

OPTIONS:
    -t, --threads <THREADS>    The number of resource pack files to process in parallel, in different threads. By
                               default, a value appropriate to the CPU the program is running on is used, but you might
                               want to decrease it to reduce memory usage

ARGS:
    <resource pack directory>    The directory where the resource pack to process is
    <result ZIP file>            The path to the resulting ZIP file, ready to be distributed
```

## Potentials for improvement
These are some tweaks to the application which could further improve the compression it achieves, but are not scheduled for a release. Feel free to submit a PR with some (or all) of these changes!

* Parse JSON files to determine unused assets (models, textures, sounds...), and skip them from the result ZIP file
* Understand the TTF and OGG formats more, to remove metadata and further compress them
* Implement an "append mode", which only adds to a result ZIP file resource pack files which are newer than it (so the entire ZIP file isn't generated again if a single file changes)
