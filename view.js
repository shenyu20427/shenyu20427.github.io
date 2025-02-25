//将大屏配置文件view.js 放入部署容器根目录 
 const option ={
    "detail": {
        "name": "O M G",
        "width": 1920,
        "height": 1080,
        "scale": 47.083333333333336,
        "backgroundImage": "https://blade-data.oss-cn-hangzhou.aliyuncs.com/upload/20201119/72c004ddb076b0d13d4c7f249d53ccb9.jpg",
        "url": "",
        "mark": {},
        "gradeShow": false,
        "gradeLen": 30,
        "query": {}
    },
    "component": [
        {
            "name": "time",
            "title": "实时时间",
            "icon": "icon-datetime",
            "img": "data:image/png;base64,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",
            "top": 8,
            "left": 1788,
            "component": {
                "width": 80,
                "height": 30,
                "name": "datetime",
                "prop": "datetime"
            },
            "option": {
                "format": "hh:mm",
                "color": "#fff",
                "textAlign": "right",
                "fontSize": 28,
                "fontWeight": "bold",
                "split": 2
            },
            "index": "91870a95-3707-46a7-937c-8117203841d9",
            "zIndex": 35
        },
        {
            "name": "date",
            "title": "实时时间",
            "icon": "icon-datetime",
            "img": "data:image/png;base64,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",
            "top": 14,
            "left": 1572,
            "component": {
                "width": 200,
                "height": 30,
                "name": "datetime",
                "prop": "datetime"
            },
            "option": {
                "format": "yyyy年MM月dd日",
                "color": "rgba(138, 167, 208, 1)",
                "textAlign": "right",
                "fontSize": 20,
                "fontWeight": "normal",
                "split": 2
            },
            "index": "e0e46e70-ebb0-4676-80fb-f9158ac894bc",
            "zIndex": 34
        },
        {
            "name": "overall-2",
            "title": "折线图",
            "icon": "icon-line",
            "img": "/img/line.d9ed6cf6.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "生产总值增长率",
                        "data": [
                            6,
                            8,
                            16,
                            10,
                            8
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 300,
                "height": 240,
                "name": "line",
                "prop": "line"
            },
            "option": {
                "gridX": 33,
                "gridY": 47,
                "gridX2": 8,
                "gridY2": 23,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "lineWidth": 3,
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": false,
                "labelShowFontSize": 14,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 30,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "symbolSize": 6,
                "legend": true,
                "legendPostion": "left"
            },
            "left": 976,
            "top": 328,
            "index": "613b7a3a-acb5-4d78-8ec1-5f275e19893a",
            "zIndex": 33
        },
        {
            "name": "overall-1",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "罪犯总数变化趋势",
                        "data": [
                            16,
                            4,
                            8,
                            12,
                            24
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 300,
                "height": 240,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 32,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "rgba(255, 255, 255, 1)",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 12,
                "barRadius": 2,
                "barColor": [
                    {
                        "color1": "rgba(14, 86, 241, 1)",
                        "color2": "rgba(14, 86, 241, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "titleShow": false,
                "legendOrient": "horizontal",
                "legendFontSize": 14,
                "legendPostion": "left"
            },
            "left": 636,
            "top": 328,
            "index": "575c111c-dc48-4c2c-aa56-6ddb84075188",
            "zIndex": 32
        },
        {
            "title": "文本框",
            "name": "content-6 sub",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "%"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1204,
            "top": 240,
            "index": "c963e8b3-ac64-4033-8071-0cbd958e33c2",
            "zIndex": 31
        },
        {
            "title": "翻牌器",
            "name": "content-6",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 244,
            "left": 1184,
            "dataType": 0,
            "data": {
                "value": "2"
            },
            "dataFormatter": "",
            "component": {
                "width": 80,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 22,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true,
                "textAlign": "center"
            },
            "index": "3fe18dcf-8b4d-4167-b62f-84605f641c0b",
            "zIndex": 30
        },
        {
            "title": "文本框",
            "name": "content-6",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长率"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1184,
            "top": 214,
            "index": "6cf5a3ff-00b2-44fd-b934-0cf1f0e750ca",
            "zIndex": 29
        },
        {
            "title": "翻牌器",
            "name": "content-5",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 172,
            "left": 1184,
            "dataType": 0,
            "data": {
                "value": "24"
            },
            "dataFormatter": "",
            "component": {
                "width": 80,
                "height": 60,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 22,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true,
                "textAlign": "center"
            },
            "index": "f6485f1b-a8fd-4719-832b-85fa07704a57",
            "zIndex": 28
        },
        {
            "title": "文本框",
            "name": "content-5",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月增长"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1184,
            "top": 142,
            "index": "5bac23f7-b068-46a1-8a19-08b513d9b9e3",
            "zIndex": 27
        },
        {
            "title": "翻牌器",
            "name": "content-4",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 204,
            "left": 1004,
            "dataType": 0,
            "data": {
                "value": "282"
            },
            "dataFormatter": "",
            "component": {
                "width": 140,
                "height": 60,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 42,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true
            },
            "index": "413f5e2a-1f08-496a-8bff-d9dea0b89269",
            "zIndex": 26
        },
        {
            "title": "文本框",
            "name": "content-4 sub",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "万"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 24,
                "fontWeight": "bold",
                "color": "rgba(255, 255, 255, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1096,
            "top": 214,
            "index": "dbd752e2-7906-4552-8eca-4e653aefbe8c",
            "zIndex": 25
        },
        {
            "title": "文本框",
            "name": "content-4",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月生产总值"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(255, 255, 255, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1016,
            "top": 158,
            "index": "abd1ead0-1f89-4a06-81ba-b7fca412276b",
            "zIndex": 24
        },
        {
            "title": "文本框",
            "name": "content-3 sub",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "%"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 864,
            "top": 240,
            "index": "7e1da86b-6eee-4887-86ce-8f8379309258",
            "zIndex": 23
        },
        {
            "title": "翻牌器",
            "name": "content-3",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 244,
            "left": 844,
            "dataType": 0,
            "data": {
                "value": "2"
            },
            "dataFormatter": "",
            "component": {
                "width": 80,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 22,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(0, 255, 197, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true,
                "textAlign": "center"
            },
            "index": "26770f5c-81fc-418e-8eaf-1b6a8e6ee592",
            "zIndex": 22
        },
        {
            "title": "文本框",
            "name": "content-3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长率"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 844,
            "top": 214,
            "index": "9e9bfc32-aeef-4009-8c04-98af4450907c",
            "zIndex": 21
        },
        {
            "title": "翻牌器",
            "name": "content-2",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 172,
            "left": 844,
            "dataType": 0,
            "data": {
                "value": "24"
            },
            "dataFormatter": "",
            "component": {
                "width": 80,
                "height": 60,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 22,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(0, 255, 197, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true,
                "textAlign": "center"
            },
            "index": "8885e2a4-1797-43f0-a34c-8a935b1a4aa4",
            "zIndex": 20
        },
        {
            "title": "文本框",
            "name": "content-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月增长"
            },
            "component": {
                "width": 80,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 844,
            "top": 142,
            "index": "d4478976-3247-45af-be72-7387aaaa0672",
            "zIndex": 19
        },
        {
            "title": "翻牌器",
            "name": "content-1",
            "icon": "icon-flop",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAADXCAIAAAAm1ls2AAAACXBIWXMAAACHAAAAhwGdEjxIAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAxcSURBVHja7N1tjFxVGcDx59x7Z3Zmd6c7s3R32RbabZWku0BExIgvQbrVD2qCRl4SiYmWNpqYGO0LqKFpjDYayJYaNYrarQYiIYr6QSAE2G00CkSghAC75aXtQmm3tLAz3dd5ufccP9yZ2dnZbssMc6fd9v/rl+3N7jw9557nnufce7tHBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjqPG6b7YSccLTsYLgxlp2eqOLTmq79QjY9XXrEiJl6+hExRkSUUuForCax7Hib1dVTdjAzMpQ7esD/uqFxSflZVMoYU10vha76bNmR3LGRzMGXFoolIsqyjfaqiNVwda+e+4Nu6kR66JnTxLJDYS+XrSJW9JrPuW6u9IhOT03vGzxHBqdzfl9XWjpW5HOkmC2ejjS3SIXDVFlWeM3HL/ryt2cvWEpEmze+lDCeu2AsraPNcW10RbGsWGvLjx+U/E8pP7He/cOdyb/+opDPzdFYa2kgP1Y1113Lnh/r5MN/OP7L7+fHRzjSlGgvi6W1VlXFin33HiveVhpr+vmBIz+6Id9w24ktXVYey9NKVROr6dY7nFWXl5wvlTt6cOSbV5J4dXLizeE5g1L5fyo7mUbrJQdeNM8PFJLDjn7kOqWssm8bO3LAzabnTIpKWfO+7Uxz6xLn2Sfy/0BlhTpXhTpXlX2Lm02PHTlQdmmoonOM1s6zjyuVTwO7tbOhq7v8e4w+MTJck1jWvr12y0X5z4jFI5ddPe+bzPE3h0pTT1mqirrMaN320n/CY8fyHxKORq/45Dk1LM//xBMxcy6iJv+nUuOPPzDx5IP5ExkKr/7bYbEtUcoftfmxWxbLH7amwqpsIjm6/ab8aLOs1lvvaP3a7SUhiguEshnPq653RrffXIilYmtvad/0GxE1J5apWaxjfd9SYvlJHun5xPK7Hp7TLv8LUxaryhL6xG9/kL8yKrFbO7r+9HLxZBXOjCHxFkX+esYrDDjbEq3FlqUr1oh/UNU2lFv4Kr+aakq0Oyu684GM8eauXmoUyxKtRUykOb60GEvXdHR6nhEvn2PaE2NCkaagYulCLBHxtIix7VAxVnZ64uTxwyTeYpUaPWQ8LxSJxi7qDDTQzPjYydFDItK6fHXQF+rs9ERy9JCIJJatDvrum5ud8WO1tF9q2cGORu25fqzmiy4WdZZvK5J4H3DcpI3nWrYddCDtuW52plBnBpt6WhdjBV9GaO3HqkPhZ0whVrWlMon3vthOyBgtpvbXNuPmjm2/qTneZmbvWCpjdO3nB63Hn3ggfPj17MgrxdETiSUm3zsWRMJNPT84/vP16UINZoyJxhIz4+8FkQSZkaHUz76hp8aL4aOx1umJsSBGgjc+NvbTr9vF02PEiTSSeEHx3JxSlh0Ou5mZmo/R7KvPu22XWJattbZsW8QoZVl2SCRd4xw/NpK1HTN1UkSUsrTrpieSswuz2vZY8lj2tRd04caszmXSE0ldu/XknC6cTGVf3Tf7V9edmRgznquUZYyucZrn0tlX9znhSPHmkJuZPruD0xIAJB5A4gEg8QASDwCJ90FtGUwaY4wxQ3sCjrRnyMxKDmwKLNCmgWRJJDO8uz49uXs4yKaVNarurSPxapwGfWvjdcjugaQx60vfQo733mOSg1sCadc9vXOatGaDSQ5sCb4/N6zhMk7ivX+pwcH9QU+q23rjktq7VRVs3ZsSkfjabYFMDvv7i4HU5sGUiMR7tw0Gmnq7h9Z3S2p4OBX4yZrtRF/3RhJvUbmtJ3/mEusOBR5sdHCzSvTuLP59Z+8OPyE6rwygXaVjcde6HX6Sd3YHWWRu6BYZ/kf/KNdxEu/csbO3Z92u8mOPvpASkc6uwGvAnSMBp4NfZO7v77mNU03infO6O+MiMjqyM/D1ZVeniAw/HVBJ5heZg1sXW8lH4l2Ydn9qjYgMPxXwLLFlMNm3Ni6pwf5gAu0e3tAtqcGfrNtZn26L9/aV3BjeQuKhwny4sVsktbc/kGmi5LlF39p4au9WlQgmMfYMbVgjqb075hXSdUvCIJ/KkHjnmz1D/iy0o7ce80R8bV8gzy0KRWZ9WiG71iVKb2b6d2sl3rt9kc17JN5ZyzqzvltkuD8RWHlWvGGrlFL9wyLxtX21ftC8ZSBZ3yLzFHnYPywi8au/uInEw/vMOtVTr3sRG3v8AbrmxlpWZXs29MbFfw2gRF/JwToUgRuf2i+BPJIh8c6vdV2y7lnnGx5N0f0k3gVp97Dx13Vb6511UnhyEVw1O/tCzmBKRFKDm5VSicDvuGwauLEud4ZJvEWcdf4jZpUIekW0e6j8be/dQ2ZDt4ik9j26a3H34ZxbRJsGkv4rqfufWlwPEC/4xCt5291/u7d7fTAPiIpvD6/ZMP/d+iD+S8RsQ4wxftYFei+nXuJrZ5/h5V8EX4QP7pnxzksbe/L13qzU3q3qLNS3tW5Yt+qf+y778B+VWoRXkwv+92ruWpeoT+l1W4+q6yJk57rE2RqNwYbe2K3Og9fSmPEAEg8g8QCwxqtYqGOltWyVYzvuwZek1r8uX7uuUkq7rohoz1OhBtW23AlHsq+/UPNYthP2N68yRluOE1l5uUyPW9PjeiJZ806zbcctbOhhhxoiXT3ZzIw9M+mljkuttzewSvbZU04ouqonm0k72ZncibdrHkuUsguboijLdkINzHhB8dxc7M77l/c9Vt1GimdilLJmfxu/MbE77++8+xFlBbCBScnWNkpZ8rHelu1/brzyM4FseaPmBNOXXRXbdl+s95aAYhU/VolyO1Y0b7svfvP3RNX+fKnSblTi5jIkXqAzekjZdp32ZHJCyrLFCjiWPxU4IbGswLew92PZIWXZgccSIyLKDinLUUGfL3P2ByZrPIDEAy4MF8ADdCfcsfV3UthFeeJfD80896RV4UrMc7NGlCqpUU5dDjmhji33FmNN/e+xyX//3XbClcWat/yYH0lZVvwr32n+9A35my65zHu/3lzVMjgrZwqmLCt2/c0Nq6/MxxIzdu8PzcxkDWKdatUX/ej1Hbf/XnR+p67UA3e577xVi3YpEq9ujL+PXPN1X5XCTqrq7dcjRw56Fa6tQ5FGY7RSdukANcaUrhbmx7JTJxoOvpxLV7YVWzjaVDb85y1JtNE6cvm1xTTR6anMA3dX0UGhSNOpBmhJQK2N9sKrrwivvkLl+1RnH/qVv19fxbGMmZMASuXSk2WxQp2rQp2rVKHh7uBf3Fy2iljGGDU3lnaz587QVOdx2qlIY9M1ny90u7Wk7ZKTJw57Rw6Yd96q9D6nPuUTAiOZ6XERCUebWzq7ZpZ9qHiOW9ouHX/3iHv0oB49VOnsqvUpNp10sxn/YtHedXlmSau3pNU/3hRvF5HJ947ql5+qootO2S4vl3WzaRFpW9mTa467iTb/eDTW6jREJt496r3yjFQ+iE8ZS3uuf2FqXf5hs6Q1V9hKvqFxSaS55eTxw/qNF6tIcq29+XtWG62zM5Mi0tK+QpScrHwiZcZ7f/Ndenryv/8s1kvRld1TI0PGGBGjKrzinHmPUm1mYynV2NUz9dar2nOl7Lpbi1jZkaGZwhM85+IuEZk6NlLdFfSMsXJHD0wNPZNv19Jl4Wjz5OHXAorlnjgyuf+5fHe2LLUT7ZMjQ0qpKp7p1XxPWRKv0jOgZ8s1Y1raLzVai1JS4YlRlm0WTqH8nFb4TCNKjGlpW661VkpVvNW9sk+Xqv5AnG2XdsLRlo4V1T21P/1TR1UWS2vLsuIdK0y1sczCJZbthHOZ6dJ2iUi8Y4XWnqquXWVl7ZxVfyR3trdivmD+d4Ix6amTItIQjWVmJirPX6+hsTkzPblQYeOWll5G8rEW/pHTsNQCla2ISP6TZ2e/9JTWnlLKVHldOl0KpafH55a7M5lp26/bq5hSjPYs29EL7N5edlK8XMZvqe2EvcrLWqM9J9Sw0FPybHpKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcOH5/wDaOpwTkdu4IwAAAABJRU5ErkJggg==",
            "top": 200,
            "left": 658,
            "dataType": 0,
            "data": {
                "value": "3682"
            },
            "dataFormatter": "",
            "component": {
                "width": 140,
                "height": 60,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "rgba(0, 255, 197, 1)",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 48,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(0, 255, 197, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "prefixColor": "rgba(0, 255, 197, 1)",
                "prefixFontSize": 0,
                "whole": true
            },
            "index": "c478df08-8c9f-4315-a4d3-4354da1488cf",
            "zIndex": 18
        },
        {
            "title": "文本框",
            "name": "content-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "在狱罪犯总数"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(255, 255, 255, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 674,
            "top": 158,
            "index": "dff90167-0415-4071-9b4f-4bcbbb12317a",
            "zIndex": 17
        },
        {
            "title": "表格",
            "name": "表格",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 674,
            "left": 620,
            "dataType": 0,
            "data": [
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "泡面",
                    "price": "4.50",
                    "amount": "2",
                    "cost": "9.00"
                }
            ],
            "dataFormatter": "",
            "component": {
                "width": 660,
                "height": 320,
                "name": "table",
                "prop": "table"
            },
            "option": {
                "headerBackground": "rgba(8, 90, 111, 0.2)",
                "headerColor": "rgba(154, 168, 212, 1)",
                "headerTextAlign": "center",
                "bodyBackground": "rgba(0, 0, 0, 0.01)",
                "bodyColor": "rgba(154, 168, 212, 1)",
                "borderColor": "rgba(51, 65, 107, 1)",
                "bodyTextAlign": "center",
                "column": [
                    {
                        "label": "罪犯姓名",
                        "prop": "name",
                        "width": "",
                        "$index": 0
                    },
                    {
                        "label": "罪犯编号",
                        "prop": "SN",
                        "width": "",
                        "$index": 1
                    },
                    {
                        "label": "处遇等级",
                        "prop": "level",
                        "width": "",
                        "$index": 2
                    },
                    {
                        "label": "消费商品",
                        "prop": "item",
                        "width": "",
                        "$index": 3
                    },
                    {
                        "label": "价格",
                        "prop": "price",
                        "width": "",
                        "$index": 4
                    },
                    {
                        "label": "数量",
                        "prop": "amount",
                        "width": "",
                        "$index": 5
                    },
                    {
                        "label": "消费总额",
                        "prop": "cost",
                        "width": "",
                        "$index": 6
                    }
                ],
                "menu": false,
                "align": "center",
                "headerAlign": "center",
                "header": false,
                "count": 8,
                "scroll": true,
                "index": false,
                "scrollCount": 1,
                "scrollTime": 3000,
                "fontSize": 12,
                "nthColor": "rgba(14, 86, 241, 0.08)"
            },
            "index": "d653b2ce-7a43-4339-9799-caa3d984a606",
            "zIndex": 16
        },
        {
            "name": "labor-2",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "42周",
                    "43周",
                    "44周",
                    "45周",
                    "46周"
                ],
                "series": [
                    {
                        "name": "罪犯违规记录",
                        "data": [
                            4,
                            10,
                            8,
                            16,
                            6
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 520,
                "height": 220,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 32,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "rgba(255, 255, 255, 1)",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 4,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(254, 178, 70, 1)",
                        "color2": "rgba(254, 178, 70, 0.6)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "titleShow": false,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "legendPostion": "left",
                "category": true
            },
            "left": 44,
            "top": 780,
            "index": "e329a7b2-91cb-44c5-9e89-21a7e3dc7405",
            "zIndex": 15
        },
        {
            "name": "labor-1",
            "title": "饼图",
            "icon": "icon-pie",
            "img": "/img/pie.14e72c57.png",
            "dataType": 0,
            "dataMethod": "get",
            "time": 5000,
            "url": "./pie",
            "data": [
                {
                    "name": "普管",
                    "value": 1600,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "严管",
                    "value": 200,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "宽管",
                    "value": 160,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "特殊管理",
                    "value": 30,
                    "url": "http://www.baidu.com"
                }
            ],
            "dataFormatter": "",
            "resize": false,
            "component": {
                "width": 520,
                "height": 390,
                "name": "pie",
                "prop": "pie"
            },
            "option": {
                "legend": false,
                "labelShow": true,
                "barColor": [
                    {
                        "color1": "#00eaff",
                        "color2": "",
                        "$index": 0
                    },
                    {
                        "color1": "#01bbf2",
                        "color2": "",
                        "$index": 1
                    },
                    {
                        "color1": "#028ce5",
                        "color2": "",
                        "$index": 2
                    },
                    {
                        "color1": "#035ed7",
                        "color2": "",
                        "$index": 3
                    },
                    {
                        "color1": "rgba(21, 31, 221, 1)",
                        "color2": "",
                        "$index": 4
                    }
                ],
                "radius": false,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "roseType": false,
                "sort": false,
                "notCount": false,
                "labelShowFontSize": 10,
                "fontSize": 12
            },
            "left": 44,
            "top": 434,
            "index": "004357d7-f7fc-4455-80c7-be34b98b3e91",
            "zIndex": 14
        },
        {
            "name": "cost-3",
            "title": "折线图",
            "icon": "icon-line",
            "img": "/img/line.d9ed6cf6.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "上账资金走势",
                        "data": [
                            42000,
                            48000,
                            62000,
                            58000,
                            52000
                        ]
                    },
                    {
                        "name": "下账资金走势",
                        "data": [
                            38000,
                            52000,
                            54000,
                            50000,
                            42000
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 520,
                "height": 250,
                "name": "line",
                "prop": "line"
            },
            "option": {
                "gridX": 46,
                "gridY": 47,
                "gridX2": 8,
                "gridY2": 23,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "lineWidth": 3,
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": false,
                "labelShowFontSize": 14,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 30,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(14, 86, 241, 1)",
                        "color2": "rgba(14, 86, 241, 0.6)",
                        "$index": 1
                    }
                ],
                "barMinHeight": 2,
                "symbolSize": 5,
                "legend": true,
                "legendPostion": "left",
                "legendFontSize": 12,
                "areaStyle": true
            },
            "left": 1336,
            "top": 750,
            "index": "8a859b35-1c8b-4415-af5c-5eb3e89ce06e",
            "zIndex": 13
        },
        {
            "name": "cost-2",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "监区一",
                    "监区二",
                    "监区三",
                    "监区四"
                ],
                "series": [
                    {
                        "name": "罪犯消费总额",
                        "data": [
                            10000,
                            34000,
                            23000,
                            54000
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 260,
                "height": 220,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 49,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "rgba(255, 255, 255, 1)",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 12,
                "barRadius": 2,
                "barColor": [
                    {
                        "color1": "rgba(14, 86, 241, 1)",
                        "color2": "rgba(14, 86, 241, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "titleShow": false,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "legendPostion": "left"
            },
            "left": 1590,
            "top": 508,
            "index": "c1f51e40-2e7a-44fa-8c44-e0e909435d8e",
            "zIndex": 12
        },
        {
            "name": "cost-1",
            "title": "饼图",
            "icon": "icon-pie",
            "img": "/img/pie.14e72c57.png",
            "dataType": 0,
            "dataMethod": "get",
            "time": 5000,
            "url": "./pie",
            "data": [
                {
                    "name": "日用品",
                    "value": 40,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "饮料",
                    "value": 36,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "文具",
                    "value": 30,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "食品",
                    "value": 12,
                    "url": "http://www.baidu.com"
                },
                {
                    "name": "香烟",
                    "value": 8,
                    "url": "http://www.baidu.com"
                }
            ],
            "dataFormatter": "",
            "resize": false,
            "component": {
                "width": 240,
                "height": 220,
                "name": "pie",
                "prop": "pie"
            },
            "option": {
                "legend": true,
                "labelShow": false,
                "barColor": [
                    {
                        "color1": "#00eaff",
                        "color2": "",
                        "$index": 0
                    },
                    {
                        "color1": "#01bbf2",
                        "color2": "",
                        "$index": 1
                    },
                    {
                        "color1": "#028ce5",
                        "color2": "",
                        "$index": 2
                    },
                    {
                        "color1": "#035ed7",
                        "color2": "",
                        "$index": 3
                    },
                    {
                        "color1": "rgba(21, 31, 221, 1)",
                        "color2": "",
                        "$index": 4
                    }
                ],
                "radius": true,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "roseType": false,
                "sort": false,
                "notCount": false
            },
            "left": 1336,
            "top": 508,
            "index": "cf164aff-f9f1-4745-883a-422bb85a7924",
            "zIndex": 11
        },
        {
            "name": "education-2",
            "title": "折线图",
            "icon": "icon-line",
            "img": "/img/line.d9ed6cf6.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "整体达标率变化",
                        "data": [
                            48,
                            68,
                            72,
                            80,
                            90
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 240,
                "height": 220,
                "name": "line",
                "prop": "line"
            },
            "option": {
                "gridX": 33,
                "gridY": 47,
                "gridX2": 8,
                "gridY2": 23,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "lineWidth": 3,
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": false,
                "labelShowFontSize": 14,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 30,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "symbolSize": 6,
                "legend": true,
                "legendPostion": "left"
            },
            "left": 320,
            "top": 180,
            "index": "4ca292e9-2ec1-41ed-abce-1eff339361b2",
            "zIndex": 10
        },
        {
            "name": "education-1",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "一监区",
                    "二监区",
                    "三监区",
                    "四监区"
                ],
                "series": [
                    {
                        "name": "各监区达标率",
                        "data": [
                            98,
                            95,
                            90,
                            92
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 240,
                "height": 220,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 32,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "rgba(255, 255, 255, 1)",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 12,
                "barRadius": 2,
                "barColor": [
                    {
                        "color1": "rgba(14, 86, 241, 1)",
                        "color2": "rgba(14, 86, 241, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "titleShow": false,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "legendPostion": "left"
            },
            "left": 44,
            "top": 180,
            "index": "4ae6cb69-9660-4966-bd1c-e53d9fe0f950",
            "zIndex": 9
        },
        {
            "name": "healthy",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "42周",
                    "43周",
                    "44周",
                    "45周",
                    "46周"
                ],
                "series": [
                    {
                        "name": "挂号人数",
                        "data": [
                            4,
                            8,
                            30,
                            16,
                            12
                        ]
                    },
                    {
                        "name": "服药人数",
                        "data": [
                            20,
                            46,
                            65,
                            80,
                            40
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 520,
                "height": 220,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 32,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "rgba(255, 255, 255, 1)",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 12,
                "barRadius": 2,
                "barColor": [
                    {
                        "color1": "rgba(14, 86, 241, 1)",
                        "color2": "rgba(14, 86, 241, 0.5)",
                        "postion": 90,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "titleShow": false,
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "legendPostion": "left"
            },
            "left": 1336,
            "top": 180,
            "index": "f9d90eab-4c6f-4da9-8ab6-c5c9738f004a",
            "zIndex": 8
        },
        {
            "title": "文本框",
            "name": "version info",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "数据实时更新中  V1.0.0"
            },
            "component": {
                "width": 400,
                "height": 30,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 30
            },
            "left": 28,
            "top": 8,
            "index": "e218449c-7266-4ce4-85b3-8ad583c1bdd8",
            "zIndex": 7
        },
        {
            "title": "文本框",
            "name": "jail-name",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "湖南永州监狱大数据展示"
            },
            "component": {
                "width": 600,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 36,
                "fontWeight": "bolder",
                "color": "#fff",
                "split": 4,
                "lineHeight": 0
            },
            "left": 650,
            "top": 24,
            "index": "ccbc3646-94c2-44c5-a757-aa30d3c874fc",
            "zIndex": 6
        },
        {
            "title": "文本框",
            "name": "title 1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯教育改造概况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 60,
            "top": 118,
            "index": "0e92eef5-3451-46dd-86c3-818e1f405208",
            "zIndex": 5
        },
        {
            "title": "文本框",
            "name": "title 2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯健康状况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 118,
            "index": "44bc621d-405d-47cc-b344-d47f769518da",
            "zIndex": 4
        },
        {
            "title": "文本框",
            "name": "title 3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯劳动改造概况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 60,
            "top": 444,
            "index": "62d32a8a-872a-4f33-8196-16d65212eeaa",
            "zIndex": 3
        },
        {
            "title": "文本框",
            "name": "title 4",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯实时活动数据"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 640,
            "top": 614,
            "index": "7af0277c-8b69-4b1d-bba6-c5c1e3f2fa41",
            "zIndex": 2
        },
        {
            "title": "文本框",
            "name": "title 5",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯资金消费概况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 444,
            "index": "cd04e519-08c8-431d-8d77-69287b72b351",
            "zIndex": 1
        },
        {
            "title": "文本框",
            "name": "info 3-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "分级处遇分布情况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 60,
            "top": 494,
            "index": "8b022451-a5cd-4d6e-a517-ebcbf6cbb140",
            "zIndex": 0
        }
    ]
}