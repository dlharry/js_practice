fuction whythefuck(num)
{
    document.getElementById('output-value').innerHTML+=num;
    var value_now = document.getElementById('output-value');
    value_now.value += num;
}