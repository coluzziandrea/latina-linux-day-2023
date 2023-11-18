"use strict";

const agenda = [
    {
        orario: "09:00 - 09:45",
        sala: "Main",
        speaker: "Valentina Di Marco",
        titolo: "FOSS - intro"
    },
    {
        orario: "09:45 - 10:30",
        sala: "Lab",
        speaker: "Luca Visentin",
        titolo: "4 passi con la CLI"
    },
    {
        orario: "10:30 - 11:15",
        sala: "Main",
        speaker: "Enrico Bianchi",
        titolo: "PgSQL vs MongoDB"
    },
    {
        orario: "10:30 - 11:15",
        sala: "Lab",
        speaker: "Andrea Coluzzi",
        titolo: "Intro a GIT"
    },
    {
        orario: "11:15 - 11:30",
        sala: "",
        speaker: "",
        titolo: "Break"
    },
    {
        orario: "11:30 - 12:15",
        sala: "Main",
        speaker: "Gabriele Torregrossa",
        titolo: "Cosa sono i container"
    },
    {
        orario: "11:30 - 12:15",
        sala: "Lab",
        speaker: "Roberto Polli",
        titolo: "Python per studenti"
    },
    {
        orario: "12:15 - 13:00",
        sala: "Main",
        speaker: "Gabriele Quaresima",
        titolo: "Intro a Kubernetes"
    },
    {
        orario: "12:15 - 13:00",
        sala: "Lab",
        speaker: "Oscar di Manno",
        titolo: "Arduino"
    }
]

const table = document.getElementById("programma");

for(let sessione of agenda) {
    const row = table.insertRow(1);


    const orarioCell = row.insertCell(0);
    const salaCell = row.insertCell(1);
    const speakerCell = row.insertCell(2);
    const titoloCell = row.insertCell(3);

    orarioCell.innerHTML = sessione.orario;
    salaCell.innerHTML = sessione.sala;
    speakerCell.innerHTML = sessione.speaker;
    titoloCell.innerHTML = sessione.titolo;

}

