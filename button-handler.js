(function render(){jQuery(document.body).off("updated_cart_totals");var qty=document.querySelector("input.qty");var remove=document.querySelector("input.minus");var add=document.querySelector("input.plus");var min=document.querySelector("input.qty").getAttribute("min");var max=document.querySelector("input.qty").getAttribute("max");var step=document.querySelector("input.qty").getAttribute("step");var button=document.querySelector('button[name="update_cart"]');console.log({qty:qty,remove:remove,add:add,min:min,max:max,step:step,button:button});function updateCartButton(){if(button){button.removeAttribute("disabled");button.setAttribute("aria-disabled",false)}}remove.addEventListener("click",function(event){if(qty.value>parseInt(min)){qty.value=parseInt(qty.value)-parseInt(step)}updateCartButton()},false);add.addEventListener("click",function(event){if(max){var temp=parseInt(qty.value)+parseInt(step);if(temp<parseInt(max)){qty.value=temp}}else{qty.value=parseInt(qty.value)+parseInt(step)}updateCartButton()},false);jQuery(document.body).on("updated_cart_totals",render)})();