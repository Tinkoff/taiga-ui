(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58107],{58107:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\n.scale {\n    @media (hover: hover) and (pointer: fine) {\n        &:hover {\n            transform: scale(1.15);\n        }\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n}\n\n.overlay {\n    &::after {\n        opacity: 0%;\n        background: linear-gradient(\n            -45deg,\n            #a1a1b3 0.36%,\n            #d4d1d8 46.96%,\n            #f7fafa 67.14%,\n            #d4d1d8 83.19%,\n            #a1a1b3 93.03%\n        );\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n        &:hover::after {\n            opacity: 50%;\n        }\n    }\n\n    &:active::after {\n        opacity: 100%;\n    }\n}\n\n.highlight {\n    @media (hover: hover) and (pointer: fine) {\n        &:hover::before {\n            backdrop-filter: brightness(1.1);\n        }\n    }\n\n    &:active::before {\n        backdrop-filter: brightness(0.9);\n    }\n}\n\n.offset:hover {\n    transform: translate3d(0, -0.25rem, 0);\n}\n\n.background {\n    &::after {\n        background: url('/assets/images/not-found.svg') top;\n        background-size: 300%;\n    }\n\n    &:hover::after {\n        transform: scale(1.15);\n    }\n}\n\n.shadow:hover {\n    box-shadow: var(--tui-shadow-small-hover);\n}\n"}}]);