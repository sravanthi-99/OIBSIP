function convertTemperature() 
{
    const temperature=parseFloat(document.getElementById("temperature").value);
    const unit=document.getElementById("unit").value;
    const result=document.getElementById("result");
    if(isNaN(temperature)) 
    {
        result.textContent="Please enter a valid temperature.";
        return;
    }
    if(unit==="celsius"&&temperature<-273.15) 
    {
        result.textContent="Temperature cannot be below absolute zero.";
        return;
    }
    if(unit==="fahrenheit"&&temperature<-459.67) 
    {
        result.textContent="Temperature cannot be below absolute zero.";
        return;
    }
    if(unit==="kelvin"&&temperature<0) 
    {
        result.textContent="Kelvin cannot be below 0.";
        return;
    }
    let celsius;
    let fahrenheit;
    let kelvin;
    if(unit==="celsius") 
    {
        celsius=temperature;
        fahrenheit=(temperature*9/5)+32;
        kelvin=temperature+273.15;
    }
    if(unit==="fahrenheit") 
    {
        celsius=(temperature-32)*5/9;
        fahrenheit=temperature;
        kelvin=celsius+273.15;
    }
    if(unit==="kelvin") 
    {
        celsius=temperature-273.15;
        fahrenheit=(celsius*9/5)+32;
        kelvin=temperature;
    }
    result.innerHTML=
        `Celsius: ${celsius.toFixed(2)} °C<br>
         Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
         Kelvin: ${kelvin.toFixed(2)} K`;
}