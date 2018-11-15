<template>
	<div class="micro-news">
		<div v-for="(item,index) in [1]">
		  <div class="micro-item">
		    <header>
		      <div class="avatar">
		        
		      </div>
		      <div>成都商报</div>
		      <div>关注</div>
		    </header>
		    <content>
		      <section class="has_action">
							<div class="item_detail">
								<div class="top">
									<div class="avatar"></div>
									<div class="info">
										<div class="name">陈清华大夫</div>
										<div class="label">11-15 11:42 医生</div>
									</div>
									<div class="delete"></div>
								</div>
								<h3 class="dotdot line3">女子工厂工作发生意外手腕严重受伤 绵阳交警紧急护送就医</h3>
								<div class="list_image">
									<ul class="clearfix">
										<li class="list_img_holder">
											<img src="https://p3.pstatp.com/list/pgc-image/R9My0ou3YzcIDl">
										</li>
										<li class="list_img_holder"><img src="https://p3.pstatp.com/list/pgc-image/R9N01hLDNunlCU">
										</li>
										<li class="list_img_holder"><img src="https://p3.pstatp.com/list/pgc-image/R9N01hWCYaYX73">
										</li>
									</ul>
								</div>
								<div class="item_info">
										<span class="refresh"><i class="van-icon van-icon-contact"></i><i class="num">24</i></span>
										<span class="comment"><i class="van-icon van-icon-contact"></i><i class="num">224</i></span>
										<span class="help"><i class="van-icon van-icon-contact"></i><i class="num">1174</i></span>
								</div>
							</div>
					</section>
					<div class="bold-line"></div>
					<section class="has_action">
							<div class="item_detail">
								<div class="top">
									<div class="avatar"></div>
									<div class="info">
										<div class="name">陈清华大夫</div>
										<div class="label">11-15 11:42 医生</div>
									</div>
									<div class="delete"></div>
								</div>
								<h3 class="dotdot line3">女子工厂工作发生意外手腕严重受伤 绵阳交警紧急护送就医</h3>
								<div class="list_image">
									<ul class="clearfix">
										<li class="list_img_holder">
											<img src="https://p3.pstatp.com/list/pgc-image/R9My0ou3YzcIDl">
										</li>
										<li class="list_img_holder"><img src="https://p3.pstatp.com/list/pgc-image/R9N01hLDNunlCU">
										</li>
										<li class="list_img_holder"><img src="https://p3.pstatp.com/list/pgc-image/R9N01hWCYaYX73">
										</li>
									</ul>
								</div>
								<div class="item_info">
										<span class="refresh"><i class="van-icon van-icon-contact"></i><i class="num">24</i></span>
										<span class="comment"><i class="van-icon van-icon-contact"></i><i class="num">224</i></span>
										<span class="help"><i class="van-icon van-icon-contact"></i><i class="num">1174</i></span>
								</div>
							</div>
					</section>
		    </content>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'micro-news',
		data() {
			return {
        
			}
		},
		created() {
			
		},
		methods: {
			plusReady() {
			  
			}
		}
	}
</script>

<style lang="scss">
	.micro-news {
	  .micro-item {
	    header {
	      display:flex;
			}
			.has_action{
				margin: 0 14px;
				.item_detail{
					padding-top: 10px;
					.top{
						display: flex;
						.avatar{
							width:38px;
							height:38px;
							background:#000;
							border-radius: 50%;
							margin-right:10px;
						}
						.info{
							padding-top:5px;
							.name{
								color: #000;
								line-height: 12px;
								font-weight: bold;
							}
							.label{
								color:#666;
							}
						}
					}
					.line3{
						font-size:16px;
						line-height: 20px;
						color:#222;
						padding:10px 0;
					}
					.list_image{
						li{
							width:32.3%;
							display: inline-block;
							img{
								width:100%;
							}
						}
					}
					.item_info{
						display: flex;
						padding:8px 0 14px 0;
						span{
							flex:1;
							text-align: center;
							i{
								font-style: normal;
								color:#222;
								&.van-icon{
									vertical-align: -1px;
									margin-right: 5px;			
								}
							}
						}
					}
				}
			}
			.bold-line{
				width: 100vw;
    		height: 6px;
    		background-color: #F4F5F7;
			}
	  }
	}
</style>