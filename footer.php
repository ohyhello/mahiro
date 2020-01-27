<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

<?php if ($this->options->PWA == 'able'): ?>
<div class="tool-bar">
    <div class="tool-bar-inner">
	<?php include('share.php'); ?>
        <!-- <div class="social-share">
        </div> -->
        <div class="site-action">
            <span class="action-item"><a href="javascript:history.back(-1)">←</a></span>
            <span class="action-item"><a href="javascript:history.forward(1)">→</a></span>
            <span class="action-item"><a href="#footer">↓</a></span>
            <span class="action-item"><a href="#">↑</a></span>
        </div>
    </div>
</div>
<?php endif; ?>

<footer id="footer" role="contentinfo">
    <!-- <p><i class="iconfont icon-eye"></i>&nbsp;<?php echo getSiteViews(); ?></p> -->
    <p id="live-time"></p>
    <p>
        &copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a>.
        <?php _e('Power By  <a href="http://www.typecho.org">Typecho</a> '); ?>.
        <?php _e('<a href="https://github.com/ohyhello/Oolong" rel="external nofollow">Theme</a> by <a href="https://ohyhello.com">ohyhello</a>'); ?>
		<?php _e('<br/>live2d模型by微博@GhastRiv'); ?>
    </p>
	<script type="text/javascript" src="https://s5.cnzz.com/z_stat.php?id=1277691942&web_id=1277691942"></script>
</footer>

<!-- <div id="back-actions">
    <span class="back-top back"><i class="iconfont icon-prev-m"></i></span>
    <span class="back-bottom back"><i class="iconfont icon-next-m"></i></span>
</div> -->

<div class="img-view">
    <img src="<?php $this->options->backGroundImage() ?>" alt="This is just a placeholder img.">
</div>


<canvas id="ribbons"></canvas>

<canvas id="live2d" class="live2d" width="280" height="500"></canvas>

<?php if (!empty($this->options->feature) && in_array('pjax', $this->options->feature)): ?>
<script src="<?php $this->options->themeUrl('util/pjax.mini.js'); ?>"></script>

<script>
  new miniPjax({
    target: 'a',
    body: '#root',
    container: ['.content-wrap', '#sidebar']
  })
</script>
<?php endif; ?>

<script src="<?php $this->options->themeUrl('dist/js/index.min.js'); ?>"></script>

<!--  Lazy load images -->
<?php if (!empty($this->options->feature) && in_array('lazyImg', $this->options->feature)): ?>
<script src="<?php $this->options->themeUrl('util/lazyload.min.js'); ?>"></script>
<?php endif; ?>

<!-- fastclick -->
<?php if (!empty($this->options->feature) && in_array('fastclick', $this->options->feature)): ?>
<script src="https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js"></script>
<script>
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
</script>
<?php endif; ?>


<!-- Scroll to article area -->
<?php if(!empty($this->options->StyleSettings) && in_array('Banner', $this->options->StyleSettings) && $this->is('post')) :?>
<script>
hasBanner()
var postScrolltimer = setInterval(postScroll, 10)
</script>
<?php endif; ?>
<!--手动更改music 调用fczbl.vip 的api 下面id改成你要调用网易云音乐的id-->

<?php


		$music163url = curl_init();


      curl_setopt($music163url,CURLOPT_URL,"https://api.fczbl.vip/163/?type=single&id=431096172");
	  curl_setopt($music163url, CURLOPT_SSL_VERIFYPEER, false); //如果接口URL是https的,我们将其设为不验证,如果不是https的接口,这句可以不用加
      curl_setopt($music163url,CURLOPT_RETURNTRANSFER,true);
      $music163data = curl_exec($music163url); 
      curl_close($music163url);     
      //$music163data=json_decode($music163data,true);//将json格式转化为数组格式,方便使用
 
?>
<div id="aplayer"></div>
<script>

		const ap = new APlayer({
    container: document.getElementById('aplayer'),
	 fixed: true,
     lrcType: 3,
    audio: [<?php echo $music163data;?>]
});
		</script>

<script>

// Index auto loading
<?php if($this->is('index') && !empty($this->options->feature) && in_array('loadNextPagePost', $this->options->feature)) :?>
document.addEventListener('scroll',function(e){
    var scrollTop = e.target.body.scrollTop || e.target.documentElement.scrollTop,
        clientHeight = e.target.body.clientHeight || e.target.documentElement.clientHeight,
        scrollHeight = e.target.body.scrollHeight || e.target.documentElement.scrollHeight;
    if (scrollTop + clientHeight === scrollHeight) {
        document.querySelector('.loading-more-post') && (document.querySelector('.loading-more-post').style.display = 'block')
        loadNextPagePost()
    }
})
<?php endif; ?>

// Background like ribbon
<?php if (!empty($this->options->feature) && in_array('ribbons', $this->options->feature)): ?>
    ribbons()
<?php endif; ?>

// How long has the website been alive ?
<?php if($this->options->liveTime) :?>
var liveTimeer = setInterval(function (){
        liveTime('<?php strval($this->options->liveTime());?>')
    }, 1000)
<?php endif; ?>

// Custom Javascript
 <?php _e($this->options->customScript) ?>

</script>


<!-- Code highlight -->
<?php if (!empty($this->options->feature) && in_array('codeHighlight', $this->options->feature)): ?>
<script src="<?php $this->options->themeUrl('./lib/prism/'. $this->options->codeHighlightTheme . '/prism.js'); ?>"></script>
<?php endif; ?>


</div>
<!--live2d-->
<script async src="https://www.ohyhello.com/live2d/waifu-tips.js"></script>
<script src="https://www.ohyhello.com/live2d/live2d.js"></script>
<script type="text/javascript">
    loadlive2d("live2d", "https://www.ohyhello.com/live2d/assets/Bronya/Bronya/model.model.json");
</script>

<script type="text/javascript" language="javascript">  
	if(window.console&&window.console.log){  
	console.log('瞄！你开控制台了！');
	console.log('你想窥视我的秘密吗？'); 
	console.log("%c哼╭(╯^╰)╮","color:#FF69B4");
	console.log("%c既然打开了控制台 那么你就是我的人啦！","color:#b1d4fc");  
}  
</script>

<!-- End root -->

<?php $this->footer(); ?>

</body>

</html>