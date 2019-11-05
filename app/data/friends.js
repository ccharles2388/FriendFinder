var friends = [
    {
 "name": "Stacy Silas",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p320x320/49898055_10216604730648159_4790969442399944704_n.jpg?_nc_cat=109&_nc_ht=scontent-den4-1.xx&oh=b8e0df763b5bc025bb917e45120193b9&oe=5D326B42",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Erin Miller",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p320x320/42173485_10101680795411264_5916569526165569536_n.jpg?_nc_cat=108&_nc_ht=scontent-den4-1.xx&oh=0900cea08c218d3c83cd1baf11e4785e&oe=5D3130CF",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Che Previti DeMarco",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p320x320/50955222_1992923034160590_387241673110847488_n.jpg?_nc_cat=109&_nc_ht=scontent-den4-1.xx&oh=92179d9e817269edaa0f50d7a300b507&oe=5D333E73",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Carly Willis",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p320x320/48206613_2497291113620965_6847415829722562560_n.jpg?_nc_cat=100&_nc_ht=scontent-den4-1.xx&oh=34b87c8bf53701256910e1c8c27688bc&oe=5D3EDC40",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Chris Groves",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/c72.0.320.320a/p320x320/49947887_10217028359477143_8116221444670619648_n.jpg?_nc_cat=109&_nc_ht=scontent-den4-1.xx&oh=b963fb66561f9246784da0101eaa9d5b&oe=5D38C00C",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Michael Heinemann",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Joel Morgan",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/p320x320/49946972_10161206148530705_5847387734854860800_n.jpg?_nc_cat=100&_nc_ht=scontent-den4-1.xx&oh=1f75191ee1c2d12dbbd0e6b021add48d&oe=5D2E26E8",
        "scores": [
            "1",
            "1",
            "1",
            "2",
            "3",
            "2",
            "2",
            "2",
            "5",
            "1"
        ]
    },
    {
        "name": "Ryan Proctor",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/47577377_1994943533894057_2014385355981062144_n.jpg?_nc_cat=102&_nc_ht=scontent-den4-1.xx&oh=93ccb151f8b0b1dffe51b92222ce03a8&oe=5D385960",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "Scott Smith",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/c59.59.734.734a/s320x320/35651_4133854790739_1670056247_n.jpg?_nc_cat=107&_nc_ht=scontent-den4-1.xx&oh=01fc6d96b82ba1ca722f5ac7502de095&oe=5D057BEF",
        "scores": [
            "2",
            "2",
            "3",
            "2",
            "3",
            "3",
            "3",
            "3",
            "2",
            "2"
        ]
    },
    {
        "name": "Eryn McGarry",
        "photo": "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-1/c0.0.512.512a/s320x320/48429271_10218854252172440_2167361632819216384_n.jpg?_nc_cat=107&_nc_ht=scontent-den4-1.xx&oh=bc8869fab47d610b8b891d90b2f4b4ad&oe=5D34D7F3",
        "scores": [
            "1",
            "3",
            "1",
            "3",
            "3",
            "1",
            "5",
            "3",
            "4",
            "3"
        ]
    }

]

// Here we export the array. This makes it accessible to other files using require. 
module.exports = friends;