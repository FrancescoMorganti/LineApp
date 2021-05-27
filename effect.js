$( document ).ready(function() {
        var checkbox = document.querySelector('input[name=theme]');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans();
                document.documentElement.setAttribute('data-theme', 'dark');
                
                var contatoreDark = localStorage.getItem('contatoreDark');
                
                if(contatoreDark!=undefined) {
                	contatoreDark = parseInt(contatoreDark) + 1;
                } else {
                	contatoreDark = 1;
                }
                localStorage.setItem('contatoreDark', contatoreDark);
                
            } else {
                trans();
                document.documentElement.setAttribute('data-theme', 'light')
            }
        });

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
})

function mostrastatistiche(){
	var contatoreDark = localStorage.getItem('contatoreDark');
	$("#areastatistiche").val(contatoreDark);
	contatoreDark = JSON.parse(this.responseText);
}