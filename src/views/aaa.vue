<template>
  <div>
    <div class="container">
      <!-- <div class="pic"></div> -->
      <div class="search">
        <input type="text"
         class="song_search" 
        placeholder="请输入歌曲名称"
        v-model="songName" />
        <button @click="getData" class="btn">搜索</button>
       </div>

      <div class="list_song">
         <div class="name">作者:{{list.artists_name}}</div>
         <img class="list_img" :src="list.music_pic" alt="">
         <!-- <p>点击跳转{{list.music_url}}</p> -->
         <audio class="play" :src="list.music_url" controls></audio>
      </div>
      <div class="comment">
        <h4 style="padding-top:10px;padding-left:10px ">评论区</h4>
        <img style="margin-left:5px" class="image" :src="list.avatarurl" alt="">
        <div class="user_name">
          <p class="nickname">{{list.nickname}}</p>
          <p class="name">{{list.name}}</p>
        </div>
        <div class="comments">{{list.comments}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
   return{
     songName:'',
     list:''
   }
 },
 methods:{
   getData() {
     this.$http.get('?format=json').then(res => {
       this.list = res.data
     })
   }
 },
 created(){
   this.getData()
 }
}
</script>

<style lang="less">
  .container{
  width: 100vw;
  height: 100vh;
  }
  .search{
    display: flex;
    justify-content:center;
    align-items:flex-start;
    box-sizing: border-box;
    .song_search{
      height: 35px;
      width: 300px;
      border-radius: 2px;
      margin-top: 20px;
      border: 3px solid rgb(128, 255, 249);
      display: inline;
      text-align: center;
      box-sizing: border-box;
    }
    .btn{
      display: inline;
      margin-top: 20px;
      height: 36px;
      width: 70px;
      border: 3px solid rgb(118, 241, 241);
      background: #fff;
      border-radius:5px;
      margin-left: 5px;
    }
  }
      .list_song{
      width: 400px;
      height: 400px;
      background: rgb(248, 209, 209);
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .list_img{
        width: 200px;
        height: 200px;
      }
      .name{
        margin-bottom: 10px;
      }
      .play{
        width: 380px;
        margin-top: 10px;
        height: 50px;
      }
    }
    .comment{
      box-sizing: border-box;
      width: 400px;
      margin: 0 auto;
      background: #ccc;
      .image{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-top: 20px;
        border: 1px dashed red;
      }
      .user_name{
        position: relative;
      .nickname{
        display: inline;
        line-height: 50px;
        height: 50px;
        bottom: 15px;
        left: 60px;
        position: absolute;
      }
    .name{
      position: absolute;
      left: 60px;
      bottom: 5px;
      color: #c51313;
      font-size: 87.5%;
    }
  }
  .comments{
    padding: 10px;
  }
  }
</style>