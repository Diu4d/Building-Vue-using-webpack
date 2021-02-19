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
        <h4 style="margin-top:10px">评论区</h4>
        <img class="image" :src="list.avatarurl" alt="">
        <p class="nickname">{{list.nickname}}</p>
        <p class="name">{{list.name}}</p>
        <div>{{list.comments}}</div>
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
       console.log(res.data);
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

    .song_search{
      height: 30px;
      width: 300px;
      border-radius: 2px;
      margin-top: 20px;
      border: 3px solid rgb(128, 255, 249);
      display: inline;
      text-align: center;
    }
    .btn{
      display: inline;
      margin-top: 20px;
      height: 36px;
      width: 50px;
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
        margin-top: 20px;
      }
    }
    .comment{
      width: 400px;
      height: 100px;
      position: relative;
      margin: 0 auto;
      .image{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-top: 20px;
        border: 1px dashed red;
      }
      .nickname{
        display: inline;
        line-height: 50px;
        height: 50px;
        position: absolute;
      }
    .name{
      position: absolute;
      left: 55px;
      bottom: 10px;
      color: #ccc;
      font-size: 87.5%;
    }
  }
</style>