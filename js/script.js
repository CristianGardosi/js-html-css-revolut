$(document).ready( function() {

    // DROPDOWN MENU *********************************

    // Targhettizzo il link da cliccare per far comparire il menu, in questo caso <a> figlio diretto di li-with-dropdown
    var dropdownClick = $('.li-with-dropdown > a');
    // Targhettizzo il menu che deve comparire al mio click
    var dropdownMenu = $('.li-with-dropdown > .dropdown-menu');

    // Show / Hide 
    // Quando clicco su dropdownClick (targhettizzato con this per riferirsi nello specifico a quello selezionato in quel momento dato che possono essere molteplici) deve comparire il mio menu, e quando riclicco esso deve scomparire. Va gestita anche l'ipotesi di apertura di un secondo dropdown senza aver chiuso quello precedente.
    dropdownClick.click( function() {
        // Variabile in cui salvo il menu attualmente aperto
        var actualMenu = $(this).next('.dropdown-menu');
        // Chiudo tutti i menu quando ne clicco uno nuovo e rimane aperto solo quest ultimo
        dropdownMenu.not(actualMenu).hide();
        // Lavoro sul mio menu attuale di apertura se è chiuso e volendo di chiusura se è aperto
        actualMenu.toggle();
    });


});