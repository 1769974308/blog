<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'XVae75iCmbR6nnvw29pL6wja-gzGzoHsz',// your appId
      appKey: 'upVNeqf69DcmRGEknUXoBuoU', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: '请留下您宝贵的建议，谢谢！' 
    });
  },
}
</script>

