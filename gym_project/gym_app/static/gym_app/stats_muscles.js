//abdominals chart

document.addEventListener("DOMContentLoaded",function(){
   const chart_div= document.getElementById("charts");
   const chart_data= chart_div.getAttribute("muscle_measurements");
   const json_chart_div= JSON.parse(chart_data);
   console.log(json_chart_div);
});
