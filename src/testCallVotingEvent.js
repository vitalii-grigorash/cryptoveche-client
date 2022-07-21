export const callVotingEvent = [
    {
        "namedUsers": {
            "users": [
                {
                    "id": "d.kirillov@spbu.ru",
                    "name": "Иванов Иван Иванович",
                    "email": "d.kirillov@spbu.ru"
                }
            ],
            "observers": [],
            "counters": []
        },
        "config": {
            "org_id": "b81592e8-3a42-43bf-8d0c-66747245d798",
            "general": {
                "observers": true,
                "counters": false,
                "templates": true,
                "invalid_ballots": false,
                "statistics": true,
                "statistics_step": 15,
                "statisticsWindowStep": 60
            },
            "event": {
                "combined_time": false,
                "show_type": true,
                "default_type": "secret",
                "templates": [
                    "ynq",
                    "none",
                    "position_single",
                    "position_multiple",
                    "same_positions"
                ],
                "ynq_answers": [
                    "За",
                    "Против",
                    "Воздержаться"
                ],
                "quorum": true,
                "default_quorum": "0",
                "default_quorum_type": "voting",
                "re_voting": true,
                "default_re_voting": false,
                "re_registration": true,
                "default_re_registration": false,
                "material": true,
                "question_material": true,
                "answer_material": true
            },
            "protocol": {
                "enabled": true,
                "template_link": "https://files.dltc.xyz/TmpCommonProtocolTemplate.docx"
            },
            "mail": {
                "enabled": true,
                "on_creating": true,
                "on_start_registration": true,
                "on_end_registration": true,
                "on_start_voting": true,
                "on_end_voting": true,
                "after_start_voting": [
                    15
                ],
                "to_end_voting": [
                    15
                ]
            }
        },
        "owner": {
            "user_id": "d.kirillov@spbu.ru",
            "org_id": "b81592e8-3a42-43bf-8d0c-66747245d798",
            "title": "Моя империя"
        },
        "type": "secret",
        "registration_start_time": "02/09/2020 11:17",
        "registration_end_time": "02/09/2020 12:17",
        "event_start_time": "02/09/2020 12:17",
        "event_end_time": "02/09/2020 13:17",
        "re_registration": false,
        "re_voting": false,
        "quorum": "0",
        "quorum_type": "voting",
        "invalidBallots": false,
        "questions": [
            {
                "id": "5563d972-cbf2-4215-ae72-bd9fc4867959",
                "title": "1.Вы за проведение данного мероприятия?",
                "template": "ynq",
                "bulletinId": "bd743d15-e0cd-4981-85b4-fe61df8d4be1",
                "options": {
                    "rows": [
                        {
                            "id": "da61aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "За"
                        },
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Против"
                        }
                    ],
                    "columns": [
                        {
                            "id": "8cef93d4-e162-49d6-a3d2-a0e6ec5e9538",
                            "value": "SYSTEM_DEFAULT_COLUMN"
                        }
                    ]
                },
                "materials": [],
                "rules": {
                    "pick_gt": -1,
                    "pick_ge": -1,
                    "pick_lt": -1,
                    "pick_le": -1,
                    "pick_eq": -1
                }
            },
            {
                "id": "5963d972-cbf2-4215-ae72-bd9fc4867959",
                "title": "2.Вы за проведение данного мероприятия?",
                "template": "ynq",
                "bulletinId": "bd743d15-e0cd-4981-85b4-fe61df8d4be1",
                "options": {
                    "rows": [
                        {
                            "id": "da61aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "Иванов"
                        },
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Петров"
                        },
                        {
                            "id": "5z71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Васильев"
                        },
                        {
                            "id": "5z11adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Петрович"
                        }
                    ],
                    "columns": [
                        {
                            "id": "8cef93d4-e162-49d6-a3d2-a0e6ec5e9538",
                            "value": "SYSTEM_DEFAULT_COLUMN"
                        }
                    ]
                },
                "materials": [],
                "rules": {
                    "pick_gt": -1,
                    "pick_ge": -1,
                    "pick_lt": -1,
                    "pick_le": -1,
                    "pick_eq": -1
                }
            },
            {
                "id": "2563d972-cbf2-4215-ae72-bd9fc4867959",
                "title": "3.Вы за проведение данного мероприятия?",
                "template": "ynq",
                "bulletinId": "bd743d15-e0cd-4981-85b4-fe61df8d4be1",
                "options": {
                    "rows": [
                        {
                            "id": "da61aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "За"
                        },
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Против"
                        },
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5155",
                            "value": "Воздержаться"
                        }
                    ],
                    "columns": [
                        {
                            "id": "8cef93d4-e162-49d6-a3d2-a0e6ec5e9538",
                            "value": "SYSTEM_DEFAULT_COLUMN"
                        }
                    ]
                },
                "materials": [],
                "rules": {
                    "pick_gt": -1,
                    "pick_ge": -1,
                    "pick_lt": -1,
                    "pick_le": -1,
                    "pick_eq": -1
                }
            },
            {
                "id": "0563d972-cbf2-4215-ae72-bd9fc4867959",
                "title": "4.Вы за проведение данного мероприятия?",
                "template": "ynq",
                "bulletinId": "bd743d15-e0cd-4981-85b4-fe61df8d4be1",
                "options": {
                    "rows": [
                        {
                            "id": "da61aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "Да"
                        },
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Нет"
                        }
                    ],
                    "columns": [
                        {
                            "id": "8cef93d4-e162-49d6-a3d2-a0e6ec5e9538",
                            "value": "SYSTEM_DEFAULT_COLUMN"
                        }
                    ]
                },
                "materials": [],
                "rules": {
                    "pick_gt": -1,
                    "pick_ge": -1,
                    "pick_lt": -1,
                    "pick_le": -1,
                    "pick_eq": -1
                }
            },
            {
                "id": "0563d972-cbf2-4215-ae74-bd9fc4867959",
                "title": "5.Вы за проведение данного мероприятия?",
                "template": "grid",
                "bulletinId": "bd743d15-e0cd-4981-85b4-fe61df8d4be1",
                "options": {
                    "rows": [
                        {
                            "id": "da21aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "Банан"
                        },
                        {
                            "id": "5a71adc7-z5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Яблоко"
                        },
                        {
                            "id": "5a59adc7-b5b7-4c95-b0e2-5231bf2e5955",
                            "value": "Персик"
                        }

                    ],
                    "columns": [
                        {
                            "id": "5a71adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "За"
                        },
                        {
                            "id": "da61aefb-b4c5-471b-a24f-f0e797757bef",
                            "value": "Против"
                        },
                        {
                            "id": "5a59adc7-b5b7-4c95-b7e2-5231bf2e5955",
                            "value": "Воздержаться"
                        }

                    ]
                },
                "materials": [],
                "rules": {
                    "pick_gt": -1,
                    "pick_ge": -1,
                    "pick_lt": -1,
                    "pick_le": -1,
                    "pick_eq": -1
                }
            }
        ],
        "materials": [
            {
                "title": "Ссылка на яндекс",
                "type": "link",
                "value": "https://yandex.ru/"
            }
        ],
        "voters": [
            "d.kirillov@spbu.ru"
        ],
        "observers": [],
        "counters": [],
        "protocol": {
            "signed": true,
            "link": "",
            "counters": [],
            "formed": false
        },
        "status": "voting",
        "isRegistration": false,
        "isVoting": true,
        "isRegistered": false,
        "isVoted": false,
        "results": {
            "questions": [],
            "yetEncrypted": false,
            "counted": false,
            "quorum": false,
            "numUsers": 0,
            "numVotedUsers": 0,
            "numInvalidBallots": 0
        },
        "statistics": {
            "numUsers": 1,
            "numRegisteredUsers": 0,
            "numVotedUsers": 0,
            "registeredUsersPercentage": 0.0,
            "votedUsersPercentage": 0.0,
            "quorumReached": true,
            "updatedTime": "02/09/2020 12:34"
        },
        "id": "23a3033e-5172-45c4-a69e-0b6b5b72d6a2",
        "title": "Голосование очень важное"
    }


]