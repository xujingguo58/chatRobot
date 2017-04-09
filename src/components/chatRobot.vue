<template>
	<div id="chatRobot">
		<div id="header"><p>chatRobot</p>
		</div>
		<div id='convo'>
			<ul class="chat_thread">
			<li v-for="msg in msgs" v-bind:class=msg.class>
				{{ msg.message}}
			</li>
			</ul>
			<hr>
			<div id='foot'>
				<input type="text" id='message' v-model="humanInput">
				<button id="postMessage" v-on:click="postMessage">发送</button>
			</div>
		</div>
	</div>
</template>

<script>
import './style/style.css'


export default {
  name: 'chatRobot',
  data () {
    return {
      humanInput: '',
      msgs: [
      	{class:'agent',message: 'hello'},
      ],
      responseCode: '',
      responseText: ''
    }
  },
  methods: {
  	postMessage:function(){
  		var humanInput={class: 'human',message: this.humanInput}
  		this.msgs.push(humanInput)
  		
  		var data={
				key: "35262f70dfb84253ae3b921bc98cca76",
				loc: "北京市中关村",                        
				info: this.humanInput,                            
				userid: "80868075"
			}
  		//alert('hello')
  		this.$http.post('openapi/api',data)
  		.then(res=>{
  			this.responseCode=res.body.code
  			this.responseText=res.body.text
  			var agentInput = {class: 'agent',message: this.responseText}
  			this.msgs.push(agentInput)
  			var convo = document.getElementById('convo')
  			convo.scrollTop=convo.scrollHeight
  			console.log(res)
  		},response=>{
  			console.log('error')
  		})
  	}
  }
}
</script>



<style>
	
</style>