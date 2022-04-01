const d = document,
    $form = d.getElementById("form"),
    $msgError = d.getElementById("msg_error"),
    $select = d.getElementById("select"),
    $ul = d.getElementById("respuesta");
    $form.btn.disabled = true;

let propina = 0,
    total = 0,
    porPersona = 0;

d.addEventListener("submit",(e)=>{
    if(e.target === $form){
        e.preventDefault();
        if($form.totalFactura.value === "" || $form.totalPersonas.value === ""){
            $msgError.textContent = "Error: Por favor complete los campos";
        }else{
            if($select.value === "0"){
                $msgError.textContent = "Ocurrio un error.";
            }
            if($select.value === "1"){
                $msgError.textContent = "Calculando ...";
                propina = 0.20 * $form.totalFactura.value;
                total = propina + Number($form.totalFactura.value);
                porPersona = total / Number($form.totalPersonas.value);

                resultado();
               
            }else if($select.value === "2"){
                $msgError.textContent = "Calculando ...";
                propina = 0.10 * $form.totalFactura.value;
                total = propina + Number($form.totalFactura.value);
                porPersona = total / Number($form.totalPersonas.value);

                resultado();
            }
            else if($select.value === "3"){
                $msgError.textContent = "Calculando ...";
                propina = 0.02 * $form.totalFactura.value;
                total = propina + Number($form.totalFactura.value);
                porPersona = total / Number($form.totalPersonas.value);

                resultado();
            }
        }
        
    }
});

d.addEventListener("keydown",(e)=>{
    if(e.target === $form.totalFactura || e.target ===  $form.totalPersonas){
        if($form.totalFactura.value !== "" || $form.totalPersonas.value !== ""){
            $form.btn.disabled = false;
        }else{
            $form.btn.disabled = true;
        }
    }
});

d.addEventListener("click",(e)=>{
    if(e.target.matches(".limpiar")){
        $ul.textContent = "";
        $form.btn.textContent = "Calcular";
        $form.btn.className = "calcular";
        $form.btn.disabled = true;
    }
    else if(e.target.matches(".calcular")){
        $form.btn.type = "submit";
    }
})

function resultado (){
    setTimeout(()=>{
        $ul.innerHTML = `<li>Monto de la propina: $ ${Math.round(propina)}</li>
        <li>Monto total: $ ${Math.round(total)}</li>
        <li>Cada persona debe pagar: $ ${Math.round(porPersona)}</li>`;
        $msgError.textContent = "";
        $form.btn.textContent = "Limpiar";
        $form.btn.type = "reset";
        $form.btn.className = "limpiar";
    },2000);
}