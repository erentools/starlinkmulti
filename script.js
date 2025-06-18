
let language = "es";

function toggleLanguage() {
    language = language === "es" ? "it" : "es";
    updateLanguage();
}

function updateLanguage() {
    const translations = {
        "es": {
            "toggleText": "🌐 Español",
            "form-title": "Solicitud de Servicio",
            "submitBtn": "Solicitar Servicio",
            "success-message": "Datos enviados con éxito",
            "activation-msg": "Su activación se hará efectiva dentro de las próximas 48 horas.",
            "phone": "+34 600000000",
            "name": "Nombre Completo",
            "dni": "DNI",
            "email": "Correo Electrónico",
            "username": "Crear Usuario",
            "password": "Contraseña",
            "confirm_password": "Verificar Contraseña",
            "address": "Dirección del Domicilio",
            "country": "País",
            "neighborhood": "Barrio"
        },
        "it": {
            "toggleText": "🌐 Italiano",
            "form-title": "Richiesta di Servizio",
            "submitBtn": "Richiedi Servizio",
            "success-message": "Dati inviati con successo",
            "activation-msg": "La tua attivazione sarà effettiva entro le prossime 48 ore.",
            "phone": "+39 340000000",
            "name": "Nome Completo",
            "dni": "Codice Fiscale",
            "email": "Email",
            "username": "Crea Username",
            "password": "Password",
            "confirm_password": "Verifica Password",
            "address": "Indirizzo di Residenza",
            "country": "Paese",
            "neighborhood": "Quartiere"
        }
    };

    document.getElementById("toggle-language").textContent = translations[language]["toggleText"];
    for (let key in translations[language]) {
        const el = document.getElementById(key);
        if (el) {
            if (el.placeholder !== undefined) {
                el.placeholder = translations[language][key];
            } else {
                el.textContent = translations[language][key];
            }
        }
    }
}

function startLoading() {
    document.getElementById('progress-bar-container').style.display = 'block';
    let progress = 0;
    const interval = setInterval(() => {
        progress++;
        document.getElementById('progressBar').value = progress;
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "success.html?lang=" + language;
        }
    }, 300); // 100 * 300ms = 30s
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang === "it") language = "it";
    updateLanguage();
};
