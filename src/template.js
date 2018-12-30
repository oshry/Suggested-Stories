// html skeleton provider
function template(title, initialState = {}, content = ""){
  let scripts = ` <script src="assets/bundle.js"> </script> `
  let page = `<div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                ${scripts}`;

  return page;
}

module.exports = template;
