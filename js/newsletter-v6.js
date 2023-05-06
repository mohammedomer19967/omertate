var div=document.createElement("div");div.innerHTML=`<form class="newsletter-form" method="post" action="https://formspree.io/f/xnqywlge" class="listmonk-form nl-form" style="text-align: center;">
    <div style="width:100%;">
        <input type="hidden" name="nonce" />
        <input class='form-input form-input-large' type="email" name="email" required placeholder="Your email address" /></p>
        <input type="text" name="name" placeholder="Your Name" class='form-input form-input-large' style="margin-top: 8px;" />
      
        <input style="display: none;" id="3fc5f" type="checkbox" name="l" checked value="3fc5fc22-dc98-4fc6-9237-42d6de0c8c4f" />

        <input type="submit" value="Subscribe" class='button-large bg-primary-3 w-button' style="margin-top: 16px; width: 300px;" />
    </div>
</form>`;document.currentScript.parentNode.insertBefore(div.firstElementChild,document.currentScript);