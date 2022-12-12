<!-- 메인 페이지 마크업 -->
<template lang="html">
  <div class="box1">
    <h2>메인 페이지 입니다.</h2>
    <div>
      <label for="title">지역 </label>
      <input id="title" type="text" v-model="value" />
      <button @click="search()">검색</button>
    </div>

    <div v-show="message">{{msgtext}}</div>

    <div v-for="(x) in oneromms" :key="x.id">
      <img :src="x.image" alt="" class="rimg">
      <h4>{{ (x.id+1) + '.' + x.title }}</h4>
      <p>{{ 'price : ' + x.price }}</p>
      <p>{{ x.content }}</p>
    </div>
  </div>
</template>

<script>
import jdata from '../oneroom.json';

export default {
  data(){
    return{
      message:false,
      msgtext:'검색 데이터가 없습니다',
      value: '',
      oneromms : jdata
    }
  },
  methods:{
    search: function(){
      let text = this.value;
      if(text){
        this.oneromms = jdata.filter(function(element){
          return element.title.includes(text);  //조건에 참이면 객체를 배열로 리턴
        });
        
        if(this.oneromms.length==0){
           this.message=true;
           this.msgtext='검색 데이터가 없습니다';
           
        }else{
           this.message=true;
           this.msgtext=this.oneromms.length + '개가 검색되었습니다';
           
        }
      }else{
        alert('검색어를 입력해주세요!');
      } 
    }
  }
}
</script>

<style>
  .box1{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
   background: crimson; color: #fff;}
</style>