function input_num(num)
{
    var value_now = document.getElementById('output-value').innerText;
    if(value_now == '0'){
        document.getElementById('output-value').innerText = '';
    }
    document.getElementById('output-value').innerText += num;
}
function input_clear()
{
    document.getElementById('output-value').innerText = '0';
}
function calculate()
{
    document.getElementById('output-value').innerText = 'calculated value should be here';
}