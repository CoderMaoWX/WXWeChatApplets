// pages/welcome/welcome.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        welcomeValue: "欢迎学校微信小程序",
        checkboxItems: [{
                name: '篮球',
                value: 'basketball'
            },
            {
                name: '足球',
                value: 'football'
            },
            {
                name: '羽毛球',
                value: 'badminton'
            },
            {
                name: '乒乓球',
                value: 'pingpong'
            },
        ],
  
        userInfo: {
            name: 'Tom',
            age: 20
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})