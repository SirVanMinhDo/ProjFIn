// --- Wink wink, pas de marque de compagnie Spline 3D agaçante --- //
window.onload = function () {
    var splineViewers = document.querySelectorAll('spline-viewer');

    splineViewers.forEach(function (splineViewer) {
        var shadowRoot = splineViewer.shadowRoot;

        if (shadowRoot && shadowRoot.querySelector('#logo')) {

            shadowRoot.querySelector('#logo').remove();
        }
    });
}



// --- Variables pour le carrousel --- //

// - Modeles 3D - //
var modelactuelIndex = 1;
var totalModels = 4;
// - Texts titre - //
var titreIndex = 1;
var titreTotal = 4;
// - Texts desc - //
var descIndex = 1;
var descTotal = 4;
// - Texts apprentissage - //
var apprendIndex = 1;
var apprendTotal = 4;
// - Texts logiciels - //
var logicielsIndex = 1;
var logicielTotal = 4;


// - Configuration du bouton droit(next) pour section projet - //
document.getElementById('suivBtn').addEventListener('click', function () {

    var modelactuel = document.querySelector('.model' + modelactuelIndex);
    modelactuel.classList.remove('show');
    modelactuel.classList.add('hide');
    modelactuelIndex = (modelactuelIndex % totalModels) + 1;
    var nextModel = document.querySelector('.model' + modelactuelIndex);
    nextModel.classList.remove('hide');
    nextModel.classList.add('show');

    var titreactuel = document.querySelector('.title' + titreIndex);
    titreactuel.classList.remove('show');
    titreactuel.classList.add('hide');
    titreIndex = (titreIndex % titreTotal) + 1;
    var nextTitre = document.querySelector('.title' + titreIndex);
    nextTitre.classList.remove('hide');
    nextTitre.classList.add('show');

    var descactuel = document.querySelector('.desc' + descIndex);
    descactuel.classList.remove('show');
    descactuel.classList.add('hide');
    descIndex = (descIndex % descTotal) + 1;
    var nextDesc = document.querySelector('.desc' + descIndex);
    nextDesc.classList.remove('hide');
    nextDesc.classList.add('show');

    var apprendactuel = document.querySelector('.apprend' + apprendIndex);
    apprendactuel.classList.remove('show');
    apprendactuel.classList.add('hide');
    apprendIndex = (apprendIndex % apprendTotal) + 1;
    var nextApprend = document.querySelector('.apprend' + apprendIndex);
    nextApprend.classList.remove('hide');
    nextApprend.classList.add('show');


    var logicielsactuel = document.querySelector('.logiciels' + logicielsIndex);
    logicielsactuel.classList.remove('show');
    logicielsactuel.classList.add('hide');
    logicielsIndex = (logicielsIndex % logicielTotal) + 1;
    var nextLogiciel = document.querySelector('.logiciels' + logicielsIndex);
    nextLogiciel.classList.remove('hide');
    nextLogiciel.classList.add('show');
});

// - Configuration du bouton gauche(previous) - //
document.getElementById('preceBtn').addEventListener('click', function () {
    var modelactuel = document.querySelector('.model' + modelactuelIndex);
    modelactuel.classList.remove('show');
    modelactuel.classList.add('hide');
    modelactuelIndex = (modelactuelIndex - 1 <= 0) ? totalModels : modelactuelIndex - 1;
    var prevModel = document.querySelector('.model' + modelactuelIndex);
    prevModel.classList.remove('hide');
    prevModel.classList.add('show');

    var titreactuel = document.querySelector('.title' + titreIndex);
    titreactuel.classList.remove('show');
    titreactuel.classList.add('hide');
    titreIndex = (titreIndex - 1 <= 0) ? titreTotal : titreIndex - 1;
    var prevTitre = document.querySelector('.title' + titreIndex);
    prevTitre.classList.remove('hide');
    prevTitre.classList.add('show');

    var descactuel = document.querySelector('.desc' + descIndex);
    descactuel.classList.remove('show');
    descactuel.classList.add('hide');
    descIndex = (descIndex - 1 <= 0) ? descTotal : descIndex - 1;
    var prevDesc = document.querySelector('.desc' + descIndex);
    prevDesc.classList.remove('hide');
    prevDesc.classList.add('show');

    var apprendactuel = document.querySelector('.apprend' + apprendIndex);
    apprendactuel.classList.remove('show');
    apprendactuel.classList.add('hide');
    apprendIndex = (apprendIndex - 1 <= 0) ? apprendTotal : apprendIndex - 1;
    var prevApprend = document.querySelector('.apprend' + apprendIndex);
    prevApprend.classList.remove('hide');
    prevApprend.classList.add('show');

    var logicielsactuel = document.querySelector('.logiciels' + logicielsIndex);
    logicielsactuel.classList.remove('show');
    logicielsactuel.classList.add('hide');
    logicielsIndex = (logicielsIndex - 1 <= 0) ? logicielTotal : logicielsIndex - 1;
    var prevLogiciel = document.querySelector('.logiciels' + logicielsIndex);
    prevLogiciel.classList.remove('hide');
    prevLogiciel.classList.add('show');
});


document.querySelector('a[href="#project"]').addEventListener('click', function (event) {

    event.preventDefault();

    document.getElementById('project').classList.toggle('hide');

    void document.getElementById('project').offsetWidth;

    document.getElementById('project').classList.toggle('with-transition');
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {

    event.preventDefault();

    var baliseContact = document.getElementById('contact')
    baliseContact.classList.toggle('addBorder');



});
