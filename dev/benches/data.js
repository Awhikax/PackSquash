window.BENCHMARK_DATA = {
  "lastUpdate": 1658367311318,
  "repoUrl": "https://github.com/ComunidadAylas/PackSquash",
  "entries": {
    "PackSquash library quick benchmarks": [
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "7cc3d3675fbc6ea5fbe708d7557855aba614c3db",
          "message": "chore(ci/docker): tweak comment and add proper description label",
          "timestamp": "2022-06-08T22:47:11+02:00",
          "tree_id": "3e598535644ff1708593029f66e16ca436b82c6f",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/7cc3d3675fbc6ea5fbe708d7557855aba614c3db"
        },
        "date": 1654723052153,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15909948,
            "range": "± 758191",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 997827211,
            "range": "± 13104958",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15469189839,
            "range": "± 203309023",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2671755276,
            "range": "± 78327309",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "404d88bacb2d21ecc84a0c7d032ff49ff033bb97",
          "message": "chore(static_analysis): remove withdrawn advisory from deny.toml",
          "timestamp": "2022-06-08T22:49:03+02:00",
          "tree_id": "4eb133ae4652c70db8a8198bc1dcb14e17b6fe96",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/404d88bacb2d21ecc84a0c7d032ff49ff033bb97"
        },
        "date": 1654723932190,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 16810987,
            "range": "± 834016",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 1039286659,
            "range": "± 32973517",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 16323709976,
            "range": "± 314867821",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2636259248,
            "range": "± 81254762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "46f5772d58963dcfd69ddab3de8213bd3295a942",
          "message": "fix(pack_file/asset_type): legacy font .bin files can be anywhere\n\nThe Minecraft wiki incorrectly pointed out that .bin files belong to\nassets/<namespace>/font, but the game interprets the resource location\nin an absolute context, so valid resource locations for those files can\npoint anywhere in the pack. Indeed, a PackSquash user reported dealing\nwith a pack that had a .bin file outside of the usual folder, which\nPackSquash broke due to me coding a too restrictive glob pattern based\non the wiki misinformation.\n\nMake the .bin glob pattern more permissive to fix the situation.",
          "timestamp": "2022-06-08T23:13:20+02:00",
          "tree_id": "14a5b1d3fc161ec5ea77fa354ad8f65e5c1934e9",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/46f5772d58963dcfd69ddab3de8213bd3295a942"
        },
        "date": 1654725717322,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13000168,
            "range": "± 604687",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 826767095,
            "range": "± 1712070",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13995786116,
            "range": "± 49827923",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2214103027,
            "range": "± 60926880",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AlexTMjugador",
            "username": "AlexTMjugador",
            "email": "AlexTMjugador@users.noreply.github.com"
          },
          "committer": {
            "name": "AlexTMjugador",
            "username": "AlexTMjugador",
            "email": "AlexTMjugador@users.noreply.github.com"
          },
          "id": "46f5772d58963dcfd69ddab3de8213bd3295a942",
          "message": "fix(pack_file/asset_type): legacy font .bin files can be anywhere\n\nThe Minecraft wiki incorrectly pointed out that .bin files belong to\nassets/<namespace>/font, but the game interprets the resource location\nin an absolute context, so valid resource locations for those files can\npoint anywhere in the pack. Indeed, a PackSquash user reported dealing\nwith a pack that had a .bin file outside of the usual folder, which\nPackSquash broke due to me coding a too restrictive glob pattern based\non the wiki misinformation.\n\nMake the .bin glob pattern more permissive to fix the situation.",
          "timestamp": "2022-06-08T21:13:20Z",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/46f5772d58963dcfd69ddab3de8213bd3295a942"
        },
        "date": 1655085841218,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14830139,
            "range": "± 993401",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 978210971,
            "range": "± 9348325",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15308909972,
            "range": "± 82251273",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2491328574,
            "range": "± 68808633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "e27ebb38979a0aa82ca5eae83c13e54f1cef59ba",
          "message": "chore(deps): update globset, sysinfo and uuid to their latest versions",
          "timestamp": "2022-06-13T14:00:09+02:00",
          "tree_id": "a6cdff0f19948952e41a3ec7b6d06ab18432cebf",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/e27ebb38979a0aa82ca5eae83c13e54f1cef59ba"
        },
        "date": 1655124347134,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10997347,
            "range": "± 317731",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 790386573,
            "range": "± 1901595",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12763358946,
            "range": "± 48940367",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2255457640,
            "range": "± 74777213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "cb80c9745398d79ce0a9f3a37bf5231de1540daf",
          "message": "chore(deps): update sysinfo and indexmap dependencies\n\nThe locked transitive dependencies and cargo deny configuration was also\nupdated.",
          "timestamp": "2022-06-17T14:55:37+02:00",
          "tree_id": "54d9ffedbecfad1876be1386d42f819b1645aabc",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/cb80c9745398d79ce0a9f3a37bf5231de1540daf"
        },
        "date": 1655473949504,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14101526,
            "range": "± 729030",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 762389944,
            "range": "± 7702052",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15590937195,
            "range": "± 34272988",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2284793740,
            "range": "± 59136438",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "25e5153ae89082c9aa4c41f094fae39506f09bfe",
          "message": "chore(deps): remove transitive dependency on chrono\n\nchrono is a worrying crate to depend on, because it depends on old\nversions of the time crate with known security problems. PackSquash is\nnot affected by these, and overall upstream does not consider the issue\nvery important, but as GitHub advisories are rolled out for it, silecing\nall the security warnings in this convoluted transitive dependency mess\ngets cumbersome quickly.\n\nLuckily, chrono is only used by wmi-rs on Windows platforms. The rest of\nthe ecosystem has been moving away from it, and wmi-rs now has a feature\nflag to directly use the time crate instead. Let's enable it to pull\nless transitive dependencies and properly fix all these warnings.",
          "timestamp": "2022-06-17T15:02:47+02:00",
          "tree_id": "1f1fc528e7501405ee7334f4b078784d666c5661",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/25e5153ae89082c9aa4c41f094fae39506f09bfe"
        },
        "date": 1655474502528,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11062780,
            "range": "± 614810",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 718878236,
            "range": "± 8208731",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13454882747,
            "range": "± 32847793",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2206662268,
            "range": "± 28992872",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "b9246d55910c4ed1c4d85b5e270ffa35f73d76be",
          "message": "chore: update dependencies and apply recent once_cell feature renamings\n\nhttps://github.com/rust-lang/rust/pull/98165 landed in the latest Rust\nnightly version, which made Dependabot CI runs to fail. Try to get\nbuilds working again by updating the references to the old names\naccordingly.\n\nWhile at it, let's also do some minor dependency version bumps.",
          "timestamp": "2022-06-20T18:43:43+02:00",
          "tree_id": "6776a382c80ef7309319d6474a4314baa9b0eca0",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/b9246d55910c4ed1c4d85b5e270ffa35f73d76be"
        },
        "date": 1655747253760,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15633822,
            "range": "± 1281737",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 886748961,
            "range": "± 7001939",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15938590979,
            "range": "± 70397125",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2446273787,
            "range": "± 23345565",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14e28858ba458d189cbf1fc7da6e9207cf9d45c7",
          "message": "chore(deps): bump indexmap from 1.9.0 to 1.9.1 (#131)\n\nBumps [indexmap](https://github.com/bluss/indexmap) from 1.9.0 to 1.9.1.\r\n- [Release notes](https://github.com/bluss/indexmap/releases)\r\n- [Changelog](https://github.com/bluss/indexmap/blob/master/RELEASES.md)\r\n- [Commits](https://github.com/bluss/indexmap/compare/1.9.0...1.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: indexmap\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-06-27T10:55:51+02:00",
          "tree_id": "e431e337c80a4e3973bcdd5b07623ec982933769",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/14e28858ba458d189cbf1fc7da6e9207cf9d45c7"
        },
        "date": 1656323335986,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12748099,
            "range": "± 197236",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 747754033,
            "range": "± 9361115",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 14594034391,
            "range": "± 45430400",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2140290088,
            "range": "± 46817803",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "c86bd6f326cc36e3a9b2f50a7291858e3fc931e0",
          "message": "chore(clippy): fix new lints",
          "timestamp": "2022-07-04T12:27:22+02:00",
          "tree_id": "816d3633d6803e14b060aa836a1a8cbf5e01b2fd",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/c86bd6f326cc36e3a9b2f50a7291858e3fc931e0"
        },
        "date": 1656932299298,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13888373,
            "range": "± 903638",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 838926684,
            "range": "± 8162782",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 14838717862,
            "range": "± 245461288",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2460315406,
            "range": "± 30604162",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d103b3543ec551ed94d052aa392654072838cab",
          "message": "chore(deps): bump serde_json from 1.0.81 to 1.0.82 (#134)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.81 to 1.0.82.\r\n- [Release notes](https://github.com/serde-rs/json/releases)\r\n- [Commits](https://github.com/serde-rs/json/compare/v1.0.81...v1.0.82)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde_json\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-04T12:29:52+02:00",
          "tree_id": "150a3bc7e5003617cbfcc10556c31e045a5f45c9",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/7d103b3543ec551ed94d052aa392654072838cab"
        },
        "date": 1656932466536,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10612651,
            "range": "± 238520",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 705941933,
            "range": "± 8594249",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13234024783,
            "range": "± 52228858",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2198511841,
            "range": "± 5821158",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f40332118196bbc68074f199121526dd8a013b7",
          "message": "chore(deps): bump serde from 1.0.137 to 1.0.138 (#133)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.137 to 1.0.138.\r\n- [Release notes](https://github.com/serde-rs/serde/releases)\r\n- [Commits](https://github.com/serde-rs/serde/compare/v1.0.137...v1.0.138)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: serde\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-04T13:07:20+02:00",
          "tree_id": "f2d4a477070632a76cd832edb149de71bf6889f0",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/6f40332118196bbc68074f199121526dd8a013b7"
        },
        "date": 1656934640506,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10827526,
            "range": "± 93325",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 710518177,
            "range": "± 4099866",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13427591937,
            "range": "± 42376720",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2217209235,
            "range": "± 51420320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "d24646b000be731a71cbf72906369d01592cd7b4",
          "message": "chore(refactor): drop `num_cpus` dep in favor of stdlib function\n\nThis function was recently stabilized and is improving in recent Rust\nversions. At this point, it is equivalent to num_cpus for most purposes,\nbut without the added burden of another dependency.",
          "timestamp": "2022-07-06T12:35:50+02:00",
          "tree_id": "9d242497a02564dc660d18cb57f9b94a77209bcc",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/d24646b000be731a71cbf72906369d01592cd7b4"
        },
        "date": 1657105820145,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11143328,
            "range": "± 170506",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 740189533,
            "range": "± 37542103",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 14225243718,
            "range": "± 873327613",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 1957409775,
            "range": "± 14041179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AlexTMjugador",
            "username": "AlexTMjugador",
            "email": "AlexTMjugador@users.noreply.github.com"
          },
          "committer": {
            "name": "AlexTMjugador",
            "username": "AlexTMjugador",
            "email": "AlexTMjugador@users.noreply.github.com"
          },
          "id": "d24646b000be731a71cbf72906369d01592cd7b4",
          "message": "chore(refactor): drop `num_cpus` dep in favor of stdlib function\n\nThis function was recently stabilized and is improving in recent Rust\nversions. At this point, it is equivalent to num_cpus for most purposes,\nbut without the added burden of another dependency.",
          "timestamp": "2022-07-06T10:34:26Z",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/d24646b000be731a71cbf72906369d01592cd7b4"
        },
        "date": 1657504167847,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13873436,
            "range": "± 456145",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 762046505,
            "range": "± 7147797",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 14974865304,
            "range": "± 51927188",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2213895518,
            "range": "± 15930971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9920791d61400a538c542c16e3db10d2eac5d2d6",
          "message": "chore: add GitHub Codespaces dev container configuration\n\nGitHub Codespaces is very useful for those that have access to it, as it\noffers a web VS Code IDE backed by a powerful Linux VM with terminal\naccess, where development can be done in a breeze, without any local\nconfiguration.\n\nThis makes it easier for new contributors to get started, and serves as\na backup development machine for maintainers.",
          "timestamp": "2022-07-14T12:08:07Z",
          "tree_id": "9fa8aa2e954d9e172253d83f9d0c6cd4333d0185",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9920791d61400a538c542c16e3db10d2eac5d2d6"
        },
        "date": 1657803759901,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14464639,
            "range": "± 413665",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 752962250,
            "range": "± 4667830",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12064678280,
            "range": "± 45026519",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2671662147,
            "range": "± 8434989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AlexTMjugador",
            "username": "AlexTMjugador",
            "email": "AlexTMjugador@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9920791d61400a538c542c16e3db10d2eac5d2d6",
          "message": "chore: add GitHub Codespaces dev container configuration\n\nGitHub Codespaces is very useful for those that have access to it, as it\noffers a web VS Code IDE backed by a powerful Linux VM with terminal\naccess, where development can be done in a breeze, without any local\nconfiguration.\n\nThis makes it easier for new contributors to get started, and serves as\na backup development machine for maintainers.",
          "timestamp": "2022-07-14T12:08:07Z",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9920791d61400a538c542c16e3db10d2eac5d2d6"
        },
        "date": 1658108806481,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 16399772,
            "range": "± 940146",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 870058745,
            "range": "± 18532867",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13966640158,
            "range": "± 176758141",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 3077913858,
            "range": "± 52571645",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87e6cba08f2c80a4f94bd296fec3d5dfecd044d9",
          "message": "chore(deps): bump wmi from 0.9.3 to 0.11.0 (#140)\n\nBumps [wmi](https://github.com/ohadravid/wmi-rs) from 0.9.3 to 0.11.0.\r\n- [Release notes](https://github.com/ohadravid/wmi-rs/releases)\r\n- [Commits](https://github.com/ohadravid/wmi-rs/compare/v0.9.3...v0.11.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: wmi\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-18T14:53:57+02:00",
          "tree_id": "94945168f79e89d32db911da47e96e3089c71dc4",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/87e6cba08f2c80a4f94bd296fec3d5dfecd044d9"
        },
        "date": 1658151640246,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14147813,
            "range": "± 274978",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 747389430,
            "range": "± 3355746",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12516171656,
            "range": "± 31358120",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2743646473,
            "range": "± 15001870",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "AlexTMjugador@users.noreply.github.com",
            "name": "AlexTMjugador",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "39d9e443f61184cda7710c2acf289718b97d8bf0",
          "message": "chore(clippy): fix some new lints",
          "timestamp": "2022-07-20T15:08:16Z",
          "tree_id": "76c41f08f56a5f0a86d662b8a6d86558dc69420e",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/39d9e443f61184cda7710c2acf289718b97d8bf0"
        },
        "date": 1658331295361,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10892037,
            "range": "± 152232",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 779008900,
            "range": "± 8391667",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9909967842,
            "range": "± 206679945",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2164668834,
            "range": "± 15792337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4da3965fa4403110dcde7835ed50b08c60b002e",
          "message": "chore(deps): update dependency urllib3 to v1.26.10",
          "timestamp": "2022-07-20T15:10:10Z",
          "tree_id": "4a52b22abdbe3ecfb82a586796fd265ecc5d66bd",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/f4da3965fa4403110dcde7835ed50b08c60b002e"
        },
        "date": 1658331380750,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11202571,
            "range": "± 490373",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 795511352,
            "range": "± 4641332",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9950339481,
            "range": "± 40682475",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2178910183,
            "range": "± 21442774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d774141794bf17e0429bc5f45d6f53c37c0b6104",
          "message": "fix(deps): update rust crate sysinfo to 0.24.7",
          "timestamp": "2022-07-20T15:12:44Z",
          "tree_id": "afc51cf6cd2d70a7053d804e894a923a43453b6d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/d774141794bf17e0429bc5f45d6f53c37c0b6104"
        },
        "date": 1658331988566,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12010630,
            "range": "± 590029",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 812223339,
            "range": "± 4506361",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9968752444,
            "range": "± 17276536",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2227973457,
            "range": "± 18993268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c24c6fbc653fa3f20e850da696f353864e7e55be",
          "message": "fix(deps): update rust crate imagequant to 4.0.1",
          "timestamp": "2022-07-20T15:11:47Z",
          "tree_id": "860f4493360ca3f6f0eebff086f1792a9e612bff",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/c24c6fbc653fa3f20e850da696f353864e7e55be"
        },
        "date": 1658332505573,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14424512,
            "range": "± 510503",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 860471003,
            "range": "± 6366556",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12515068617,
            "range": "± 29647509",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2277420932,
            "range": "± 28583440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12d18d15b86c94d4f3d38a17f1b44af0462737d8",
          "message": "chore(deps): update dependency soupsieve to v2.3.2.post1",
          "timestamp": "2022-07-20T15:10:05Z",
          "tree_id": "7c8c064ca0bf4c210a557563228d538aadb4d228",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/12d18d15b86c94d4f3d38a17f1b44af0462737d8"
        },
        "date": 1658332537947,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11045126,
            "range": "± 162142",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 781974947,
            "range": "± 3128931",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9921642208,
            "range": "± 215096979",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2164429393,
            "range": "± 16733019",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6f7e9508aa04127cb1471da909f2741a354d88",
          "message": "chore(deps): update dependency beautifulsoup4 to v4.11.1",
          "timestamp": "2022-07-20T18:09:20Z",
          "tree_id": "dd73d24cbd9484d38ae428c2c5884d7b248cf994",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9d6f7e9508aa04127cb1471da909f2741a354d88"
        },
        "date": 1658343086771,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12434510,
            "range": "± 175138",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 830380234,
            "range": "± 10031469",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12177037067,
            "range": "± 258731410",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2320450175,
            "range": "± 30022155",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5c819ec5919ffa44e8aabf273d8d5d6cf0a2fa5",
          "message": "chore(deps): update dependency urllib3 to v1.26.10 (#144)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-20T20:24:30+02:00",
          "tree_id": "4a52b22abdbe3ecfb82a586796fd265ecc5d66bd",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/b5c819ec5919ffa44e8aabf273d8d5d6cf0a2fa5"
        },
        "date": 1658344039672,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11135677,
            "range": "± 415137",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 799731327,
            "range": "± 3931763",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9927320848,
            "range": "± 342364121",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2170052650,
            "range": "± 9090320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1194fa292f7b7433a02462f6c5d987a24b24612f",
          "message": "fix(deps): update rust crate imagequant to 4.0.1",
          "timestamp": "2022-07-20T18:30:05Z",
          "tree_id": "71025627251297dbc8f3157efbe84c662a36b851",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/1194fa292f7b7433a02462f6c5d987a24b24612f"
        },
        "date": 1658344108978,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11373218,
            "range": "± 299165",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 800252989,
            "range": "± 6453225",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10111702377,
            "range": "± 215333648",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2223918520,
            "range": "± 26321394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4420feb345ff15c21d3403761a81aee2bf2f5855",
          "message": "chore(deps): update dependency soupsieve to v2.3.2.post1 (#143)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-20T20:24:46+02:00",
          "tree_id": "2810bb6dbc647fb30f22565c850403a61943fb42",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/4420feb345ff15c21d3403761a81aee2bf2f5855"
        },
        "date": 1658344124947,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14587241,
            "range": "± 731942",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 914325714,
            "range": "± 11506162",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 11164147914,
            "range": "± 91383542",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2363003720,
            "range": "± 94857423",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "204a0ddb4185b768a3bd5b308bc25d9f18ef263a",
          "message": "fix(deps): update rust crate imagequant to 4.0.1",
          "timestamp": "2022-07-20T18:26:07Z",
          "tree_id": "450e5257263aa51c4203b17d8c2710c25621adb9",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/204a0ddb4185b768a3bd5b308bc25d9f18ef263a"
        },
        "date": 1658344160622,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10934692,
            "range": "± 286298",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 778838273,
            "range": "± 2479161",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9931494606,
            "range": "± 22907099",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2169678368,
            "range": "± 39122158",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f274b4cdb007a13dedcc214c147b605449bc92c5",
          "message": "fix(deps): update rust crate serde to 1.0.140",
          "timestamp": "2022-07-20T18:09:13Z",
          "tree_id": "7a65a0b8036d63d23751e6b51b4c7f584068046b",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/f274b4cdb007a13dedcc214c147b605449bc92c5"
        },
        "date": 1658344172135,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 18228735,
            "range": "± 954747",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 1041455381,
            "range": "± 19219973",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15174985959,
            "range": "± 273788993",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2731752294,
            "range": "± 114976605",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7adebe131cb1f8b623c79ae348afc986aea131",
          "message": "fix(deps): update rust crate serde to 1.0.140",
          "timestamp": "2022-07-20T18:27:03Z",
          "tree_id": "6a12e0a74f75d8285e456229b5a25463c5a0bfe8",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/1d7adebe131cb1f8b623c79ae348afc986aea131"
        },
        "date": 1658344191568,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15157126,
            "range": "± 658586",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 983285808,
            "range": "± 6914590",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 11919445521,
            "range": "± 45096393",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2490459564,
            "range": "± 45825012",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0988bc07ed6c4bc36e925e9a4e4ca32d2f5110c",
          "message": "fix(deps): update rust crate sysinfo to 0.24.7",
          "timestamp": "2022-07-20T18:31:55Z",
          "tree_id": "6d895f050b38c8a0c493a11be9669543e30bbc1c",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/f0988bc07ed6c4bc36e925e9a4e4ca32d2f5110c"
        },
        "date": 1658344321718,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11965929,
            "range": "± 881781",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 756177362,
            "range": "± 19407442",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10766284039,
            "range": "± 681951657",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2136990070,
            "range": "± 124909863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "924dbe796071385ea7e4b546dab2afba41faad6b",
          "message": "fix(deps): update rust crate serde to 1.0.140",
          "timestamp": "2022-07-20T18:31:00Z",
          "tree_id": "6da732178af425010a760974fed7fcb7696ef977",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/924dbe796071385ea7e4b546dab2afba41faad6b"
        },
        "date": 1658344331596,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15187199,
            "range": "± 863517",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 992271924,
            "range": "± 7957705",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12010527295,
            "range": "± 100808157",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2479434993,
            "range": "± 45925208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71023c92457aa83eb5655e85f6a8cd6adfca4fde",
          "message": "fix(deps): update rust crate sysinfo to 0.24.7",
          "timestamp": "2022-07-20T18:27:59Z",
          "tree_id": "2a40544c6ac4c9be36b9bea591008aaa623c6da1",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/71023c92457aa83eb5655e85f6a8cd6adfca4fde"
        },
        "date": 1658344639200,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12612493,
            "range": "± 532262",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 827597840,
            "range": "± 2516089",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12163343966,
            "range": "± 44152013",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2336995553,
            "range": "± 77261847",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b64c769f090feef214ce0cad525be00ae6b541e",
          "message": "chore(deps): update dependency beautifulsoup4 to v4.11.1",
          "timestamp": "2022-07-20T18:32:00Z",
          "tree_id": "ecca22a5f00a2c3b63e7e351f295906330367d3c",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/2b64c769f090feef214ce0cad525be00ae6b541e"
        },
        "date": 1658344849441,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15652506,
            "range": "± 745166",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 1015965419,
            "range": "± 20026296",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 14623905729,
            "range": "± 295732242",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2885143714,
            "range": "± 64364703",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a81803dccfe9034b367cc87082083a34e9e54f21",
          "message": "chore(deps): update dependency beautifulsoup4 to v4.11.1",
          "timestamp": "2022-07-20T18:28:04Z",
          "tree_id": "291bb20a0d8f4f3f291f6fa774362329e546d023",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a81803dccfe9034b367cc87082083a34e9e54f21"
        },
        "date": 1658344987042,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 17787610,
            "range": "± 1359057",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 1072857383,
            "range": "± 52363479",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12259321053,
            "range": "± 407402071",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2659548080,
            "range": "± 80585441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d24aa29721a7cc15f3e5e04dbbe19c64e0624e7",
          "message": "chore(deps): update dependency filelock to v3.7.1",
          "timestamp": "2022-07-20T21:16:23Z",
          "tree_id": "8705b77073d0a219636894286fb19a347b8e4c89",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9d24aa29721a7cc15f3e5e04dbbe19c64e0624e7"
        },
        "date": 1658354306831,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13585426,
            "range": "± 967213",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 817630239,
            "range": "± 22691653",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10572299889,
            "range": "± 414217553",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2294169136,
            "range": "± 48390867",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f8d0a5c6b21a764ce7f326e98a4ac7b9109ac80",
          "message": "fix(deps): update rust crate imagequant to 4.0.1 (#145)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-21T00:56:58+02:00",
          "tree_id": "71025627251297dbc8f3157efbe84c662a36b851",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/3f8d0a5c6b21a764ce7f326e98a4ac7b9109ac80"
        },
        "date": 1658360146249,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14261793,
            "range": "± 394443",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 850218410,
            "range": "± 8900913",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12495715315,
            "range": "± 38736205",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2313692860,
            "range": "± 49767286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25569b7b9b0696cbb8a66bb587a8cf1d5c145329",
          "message": "fix(deps): update rust crate sysinfo to 0.24.7",
          "timestamp": "2022-07-20T22:58:15Z",
          "tree_id": "6629905c6c2fa4b29376a15d09bf7fab7911ea4d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/25569b7b9b0696cbb8a66bb587a8cf1d5c145329"
        },
        "date": 1658360265802,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12811493,
            "range": "± 826790",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 829438732,
            "range": "± 42055911",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10141198697,
            "range": "± 267174985",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2124067940,
            "range": "± 48967623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ad5b1fcc314870f09de87f526449cd892fbd3ed",
          "message": "chore(deps): update dependency beautifulsoup4 to v4.11.1",
          "timestamp": "2022-07-20T22:58:20Z",
          "tree_id": "fb458b85e8b7b70ac4079fb49c52211b6a3b72f8",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/5ad5b1fcc314870f09de87f526449cd892fbd3ed"
        },
        "date": 1658360295166,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14225308,
            "range": "± 663534",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 856406574,
            "range": "± 2359142",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12526811946,
            "range": "± 433355868",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2305151963,
            "range": "± 58980081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e04120409b47e6de50e660022daf857308e8fbb3",
          "message": "chore(deps): update dependency filelock to v3.7.1",
          "timestamp": "2022-07-20T22:58:29Z",
          "tree_id": "66458887ad012735dc2a0ed2e4156429af915b4e",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/e04120409b47e6de50e660022daf857308e8fbb3"
        },
        "date": 1658360320606,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13868880,
            "range": "± 635338",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 802173309,
            "range": "± 20495055",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12398298069,
            "range": "± 672917426",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2282880946,
            "range": "± 122217957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c95fc007034d78f175764008a220917c0c6efc05",
          "message": "fix(deps): update rust crate serde to 1.0.140 (#146)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2022-07-21T00:57:09+02:00",
          "tree_id": "11576cac3996ca12af60207f215dd34f98fd3c6f",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/c95fc007034d78f175764008a220917c0c6efc05"
        },
        "date": 1658360390219,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 17853666,
            "range": "± 1130175",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 1040414665,
            "range": "± 24987303",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 15367874312,
            "range": "± 565116429",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2823469369,
            "range": "± 92064157",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9d4a653805f51d5a545cb88474bd4483f742f68",
          "message": "chore(deps): update dependency requests to v2.28.1",
          "timestamp": "2022-07-20T22:58:36Z",
          "tree_id": "d1e75d19ce730cf050e4bfc2781f4468c1bb1999",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a9d4a653805f51d5a545cb88474bd4483f742f68"
        },
        "date": 1658360438961,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14442142,
            "range": "± 790901",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 902782547,
            "range": "± 27185715",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10822916423,
            "range": "± 361661440",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2321346852,
            "range": "± 92071836",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a2b32cc7c2e416033fd35543e6b3f9029ccb8d7",
          "message": "chore(deps): update dependency tqdm to v4.64.0",
          "timestamp": "2022-07-20T22:59:04Z",
          "tree_id": "c4ddc45936af8f37fa77bb5440ccbf8e4d88a160",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9a2b32cc7c2e416033fd35543e6b3f9029ccb8d7"
        },
        "date": 1658360598513,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10906109,
            "range": "± 177665",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 779987389,
            "range": "± 4867437",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 9945683959,
            "range": "± 55835790",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2166662270,
            "range": "± 12791209",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0790becddf500e5f149e5f427de4f62c88bd9849",
          "message": "chore(deps): update dependency gdown to v4.5.1",
          "timestamp": "2022-07-20T22:58:32Z",
          "tree_id": "9aaf21b4f8b17b01db70e7adb288b376d09183be",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/0790becddf500e5f149e5f427de4f62c88bd9849"
        },
        "date": 1658360605855,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 16112345,
            "range": "± 608242",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 940806434,
            "range": "± 16722561",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 13998149075,
            "range": "± 428919198",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2450893266,
            "range": "± 150844503",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9569f351e7156d7ad78f1ac6831190766e60cf8",
          "message": "fix(deps): update rust crate bytes to 1.2.0",
          "timestamp": "2022-07-20T23:00:00Z",
          "tree_id": "3b195bdd8f4d961233ad2e397b7f4c77ceb10e10",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/d9569f351e7156d7ad78f1ac6831190766e60cf8"
        },
        "date": 1658361151761,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 15967316,
            "range": "± 1854556",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 862875430,
            "range": "± 10696742",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 11917121616,
            "range": "± 64067248",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2357666190,
            "range": "± 75465922",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01f930aa38d68948624eeeb6be38cbe35c74722c",
          "message": "chore(deps): update dependency beautifulsoup4 to v4.11.1",
          "timestamp": "2022-07-21T00:33:23Z",
          "tree_id": "7f5eb6fc6c423b0139d6871161608a8f3ac30b11",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/01f930aa38d68948624eeeb6be38cbe35c74722c"
        },
        "date": 1658365718819,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14185728,
            "range": "± 566509",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 851199143,
            "range": "± 3401070",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12293089355,
            "range": "± 424994677",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2256049761,
            "range": "± 38021399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "25569b7b9b0696cbb8a66bb587a8cf1d5c145329",
          "message": "fix(deps): update rust crate sysinfo to 0.24.7",
          "timestamp": "2022-07-20T22:58:15Z",
          "tree_id": "6629905c6c2fa4b29376a15d09bf7fab7911ea4d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/25569b7b9b0696cbb8a66bb587a8cf1d5c145329"
        },
        "date": 1658365768560,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14060755,
            "range": "± 436867",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 842292625,
            "range": "± 2930879",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 12243666031,
            "range": "± 237178569",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2239976042,
            "range": "± 73277337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51008c41e54117d656ac087e09736a2670f6fc6e",
          "message": "chore(deps): update dependency filelock to v3.7.1",
          "timestamp": "2022-07-21T00:33:33Z",
          "tree_id": "ac23682f8beedce4fb092ccb08d6ff389ee22dfe",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/51008c41e54117d656ac087e09736a2670f6fc6e"
        },
        "date": 1658365953583,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10909975,
            "range": "± 378527",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 778500024,
            "range": "± 3286422",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10344340024,
            "range": "± 78672048",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2160220700,
            "range": "± 21846097",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ceebf93a2cf4682c5d637f2ce0d7e9d957ffaf5",
          "message": "fix(deps): update rust crate bytes to 1.2.0",
          "timestamp": "2022-07-21T00:35:19Z",
          "tree_id": "6bead5691b397bd6b07362ad8d0e33bd3f948bec",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/3ceebf93a2cf4682c5d637f2ce0d7e9d957ffaf5"
        },
        "date": 1658366438425,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14048643,
            "range": "± 423070",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 846466594,
            "range": "± 4298604",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 11876949762,
            "range": "± 247239348",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2293005032,
            "range": "± 63970360",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40e61236953316c7aae9003be753f594845f1437",
          "message": "chore(deps): update dependency gdown to v4.5.1",
          "timestamp": "2022-07-21T00:33:38Z",
          "tree_id": "3237f8d39b0cdab906ebfc77615f6417f116d817",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/40e61236953316c7aae9003be753f594845f1437"
        },
        "date": 1658366583409,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14333896,
            "range": "± 775951",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 842533330,
            "range": "± 30853612",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 11898591147,
            "range": "± 773675648",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2349148318,
            "range": "± 47450823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1669b73eb508bd6d76a57a1af257ebe5e3f3b568",
          "message": "chore(deps): update dependency requests to v2.28.1",
          "timestamp": "2022-07-21T00:33:43Z",
          "tree_id": "c616f2fb1c9d73a7f776dc158df40e8b5d04cfdc",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/1669b73eb508bd6d76a57a1af257ebe5e3f3b568"
        },
        "date": 1658367310269,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10999211,
            "range": "± 358931",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 791602125,
            "range": "± 8452215",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 10457817620,
            "range": "± 385195348",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 2166371982,
            "range": "± 33366655",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}