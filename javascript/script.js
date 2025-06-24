const calendar = document.getElementById("calendar");
const yearSelect = document.getElementById("yearSelect");
const monthSelect = document.getElementById("monthSelect");

const eventDays = {
  "2024-10-28": {
    title: "Haunted Nights Festival",
    description: "Spine-chilling rides, huanted mazes, and eerie entertainment."
  },
  "2024-12-31": {
    title: "Fire & Light Spectacle",
    description: "A grand finale of the year with fireworks, lasers, and live music."
  },
  "2025-7-15": {
    title: "Seaworld Adventures",
    description: "Dive into the world of dolphins and see lions in this lively marine show."
  },
  "2025-12-20": {
  title: "Winter Wonderland",
  description: "Step into a snow-kissed fairyland featuring ice sculpture, snow slides, hot cocoa booths,and Santas cabin."
}
};

function renderCalendar(year, month) {
  calendar.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("day");
    calendar.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.classList.add("day");

    const key = `${year}-${month + 1}-${day}`;
    if (eventDays[key]) {
      cell.classList.add("event-day");
      cell.textContent = day;
      cell.addEventListener("click", () => {
        document.getElementById("eventTitle").innerText = eventDays[key].title;
        document.getElementById("eventDescription").innerText = eventDays[key].description;
        document.getElementById("eventModal").style.display = "flex";
      });
    } else {
      cell.textContent = day;
    }

    calendar.appendChild(cell);
  }
}

function closeEventModal() {
  document.getElementById("eventModal").style.display = "none";
}

yearSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});

monthSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});

// Initial Load
const today = new Date();
yearSelect.value = today.getFullYear();
monthSelect.value = today.getMonth();
renderCalendar(today.getFullYear(), today.getMonth());
