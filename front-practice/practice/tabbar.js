const { createApp, ref, reactive } = Vue;
createApp({
    setup() {
        const currentIdx = ref(0);
        const tabs = reactive([
            {
                name: '资源',
                count: 4,
            },
            {
                name: '成员',
                count: 5,
            },
            {
                name: '活动',
                count: 2,
            },
            {
                name: '消息',
                count: 0,
            },
            {
                name: '详情',
            },
        ]);

        const itemList = reactive([
            {
                type: 'first',
                list: [
                    {
                        name: '计数器练习',
                        url: 'https://static-cdn-oss.mosoteach.cn/mssvc/file-type-icons-v2/icon_res_pdf@2x.png',
                        size: '1.2',
                        time: '2023-03-10',
                        watch: '20',
                    },
                    {
                        name: '选项卡练习',
                        url: 'https://static-cdn-oss.mosoteach.cn/mssvc/file-type-icons-v2/icon_res_pdf@2x.png',
                        size: '1.6',
                        time: '2023-03-11',
                        watch: '22',
                    },
                    {
                        name: 'uni-app 说明(上)',
                        url: 'https://public-cdn-oss.mosoteach.cn/mssvc/ccfile/capture/2023/03/ba821ee2284aaf21ed021f81352ed613.jpg?x-oss-process=style/s300x300',
                        size: '842',
                        time: '2023-03-12',
                        watch: '24',
                    },
                    {
                        name: 'uni-app 说明(下)',
                        url: 'https://public-cdn-oss.mosoteach.cn/mssvc/ccfile/capture/2023/03/ba821ee2284aaf21ed021f81352ed613.jpg?x-oss-process=style/s300x300',
                        size: '543',
                        time: '2023-03-13',
                        watch: '26',
                    },
                ],
            },
            {
                type: 'second',
                list: [
                    {
                        name: '孙宇航',
                        url: 'https://public-cdn-oss.mosoteach.cn/avatar/2021/91/125cc0794c06f55ec6628339b4baee63.jpg?v=1615285685&x-oss-process=style/s300x300',
                        id: '2205223112',
                    },
                    {
                        name: '⾦晨星',
                        url: 'https://public-cdn-oss.mosoteach.cn/avatar/2019/4C/3117093603a057f6bf0e5dd65aa5b8ff.jpg?v=1676265419&x-oss-process=style/s300x300',
                        id: '2205223113',
                    },
                    {
                        name: '杨康',
                        url: 'https://public-cdn-oss.mosoteach.cn/avatar/2019/15/43a6f05297be6f4d261ddb05dd51a99e.jpg?v=1571721832&x-oss-process=style/s300x300',
                        id: '2205223114',
                    },
                    {
                        name: '张星宇',
                        url: 'https://public-cdn-oss.mosoteach.cn/avatar/2023/03/429222a08ce85726f8c6a85dc9c62fc9.jpg?v=1678678626&x-oss-process=style/s300x300',
                        id: '2205223115',
                    },
                    {
                        name: '田海东',
                        url: 'https://public-cdn-oss.mosoteach.cn/avatar/2023/03/c061524d77791f48ef4f159187b583b0.jpg?v=1677925684&x-oss-process=style/s300x300',
                        id: '2205223116',
                    },
                ],
            },
            {
                type: 'third',
                list: [
                    {
                        name: 'uni-app 练习（一）',
                        url: 'https://static-cdn-oss.mosoteach.cn/mosoteach2/common/images/activities-list-icon-assignment.png',
                        size: '21',
                        time: '2023-03-12',
                        watch: '24',
                        type: '已完成',
                    },
                    {
                        name: 'uni-app 说明(下)',
                        url: 'https://static-cdn-oss.mosoteach.cn/mosoteach2/common/images/activities-list-icon-discuss.png',
                        size: '14',
                        time: '2023-03-13',
                        watch: '26',
                        type: '未完成',
                    },
                ],
            },
            {
                type: 'fourth',
            },
            {
                type: 'fifth',
                list: [
                    {
                        a: '学校：南京工业职业技术学院',
                        b: '院系：计算机与软件学院',
                        c: '班级：软件2242 Web2班',
                        d: '课程：前端工程化开发',
                        e: '学期：2022-2023-2',
                        f: '类型：学校课表班课',
                    },
                ],
            },
        ]);
        // 改变 currentIdx 的值为当前点击项的索引
        const changeTab = index => {
            currentIdx.value = index;
            console.log(currentIdx.value);
        };
        return {
            currentIdx,
            tabs,
            changeTab,
            itemList,
        };
    },
}).mount('#app');
