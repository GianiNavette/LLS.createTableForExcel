function removeThis(e, n) {
  for (i = 1; i <= n; i++) {
    e = e.parentElement;
  }
  e.remove();
}

function addTags() {
  var select = document.getElementById("SelectableTags");
  var selectedTags = document.getElementById("selectedTags");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.textContent = select.value;
  var button = document.createElement("button");
  button.innerHTML = "X";
  button.setAttribute("onclick", "removeThis(this,2)");
  span.appendChild(button);
  li.appendChild(span);
  selectedTags.appendChild(li);
}
var oldOption = "unique";
function changeSize(option) {
document.querySelector("."+oldOption).classList.add("disabled");
oldOption = option;
var el = document.querySelector("."+option);
el.classList.remove("disabled");


}
function addTaille(){
    
    var nom = document.getElementById("nomdeTaille").value;
    var content = `<div class="attribute">
    <div class="taille">
         <input checked type="checkbox" name="`+nom+`" id="" />
         <label for="`+nom+`">`+nom+`</label>
    </div>
   <div class="quantiy">
        <label for="Quantity`+nom+`">Quantité</label>
        <input min="0" type="number" name="Quantity`+nom+`" id="" />
        <label for="ean`+nom+`">EAN</label>
       <input type="text" name="ean`+nom+`" id="">
       <button onclick='removeThis(this,3)'>X</button>
   </div>
</div>`;
    var div = document.createElement("div");
    div.innerHTML = content;
    document.querySelector(".custom").insertAdjacentElement("beforeend",div);
}

function createProduct(){
    var productName = document.querySelector('input[name="productName"]').value;
    var handle = productName.toLowerCase().replace(/ /g,"-");;
    var description = document.querySelector('textarea[name="description"]').value;
    var tailles = document.querySelectorAll(".tailleDiv:not(.disabled) .attribute");
    var array = [];
    [].forEach.call(tailles, function(taille) {
        if(taille.querySelector("input[type='checkbox']").checked){
            var qty = taille.querySelector("input[type='number']").value;
            var ean = taille.querySelector("input[type='text").value;
            var name = taille.querySelector(".taille label").textContent;
            if(name =="Taille unique") {
                name="Default";
            }
            array.push({ "name": name, "quantity": qty, "ean": ean });
         
        }
      });
    console.log(array);
    var vendor = document.getElementById("MarqueSelected").value;
    var customProductType = document.getElementById("TypeSelected").value;
    var tags = document.querySelectorAll("#selectedTags li span");
    var textTags="";
    [].forEach.call(tags, function(tag) {
        // do whatever
        textTags+=tag.textContent.slice(0, -1)+", ";
      });
    textTags = textTags.slice(0, -2);
    var price = document.querySelector("input[name='TTC']").value;
    var costPerItem = document.querySelector("input[name='PUHT']").value;
    var result = document.getElementById("tableResult")
    
    
    var content = `
    <tr>
    <td>`+handle+`</td>
    <td>`+productName+`</td>
    <td>`+description+`</td>
    <td>`+vendor+`</td>
    <td></td>
    <td>`+customProductType+`</td>
    <td>`+textTags+`</td>
    <td>false</td>
    <td>Size</td>
    <td>`+array[0]["name"]+`</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>`+array[0]["ean"]+`</td>
    <td>0</td>
    <td>shopify</td>
    <td>`+array[0]["quantity"]+`</td>
    <td>deny</td>
    <td>manual</td>
    <td>`+price+`</td>
    <td></td>
    <td>true</td>
    <td>true</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>false</td>
    <td></td>
    <td>kg</td>
    <td></td>
    <td>`+costPerItem+`</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>draft</td>
    </tr>
    `;
  
    for(var i=1; i<array.length;i++){
        content += `<tr>
        <td>`+handle+`</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>`+array[i]["name"]+`</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>`+array[i]["ean"]+`</td>
        <td>0</td>
        <td>shopify</td>
        <td>`+array[i]["quantity"]+`</td>
        <td>deny</td>
        <td>manual</td>
        <td>`+price+`</td>
        <td></td>
        <td>true</td>
        <td>true</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>kg</td>
        <td></td>
        <td>`+costPerItem+`</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        `;
    }
    
    result.insertAdjacentHTML("beforeend",content);
    navigator.clipboard.writeText("<table>"+content+"</table>");
}