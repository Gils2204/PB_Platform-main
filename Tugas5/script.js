var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-160px";
}

$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown-menu").toggle();
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown-toggle").length) {
      $(".dropdown-menu").hide();
    }
  });
});

const form = document.querySelector("form");
const firstNameInput = document.querySelector("#inputFirstName");
const lastNameInput = document.querySelector("#inputLastName");
const emailInput = document.querySelector("#inputEmail");
const hobbyCountInput = document.querySelector("#inputHobbyCount");
const hobbyList = document.querySelector("#hobbyList");
const selectedHobbyContainer = document.querySelector("#selectedHobbyContainer");
const okButton = document.querySelector("#okButton");
const okButtonRadioParent = document.querySelector("#okButtonRadioParent");
const hobbyInputs = [];

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate input
  if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !hobbyCountInput.value) {
    alert("Harap isi semua field!");
    return;
  }

  // Create hobby input elements
  hobbyInputs.length = 0;
  for (let i = 0; i < hobbyCountInput.value; i++) {
    const hobbyInput = document.createElement("input");
    hobbyInput.type = "text";
    hobbyInput.className = "form-control mb-3";
    hobbyInput.placeholder = `Hobi ke-${i + 1}`;
    hobbyList.appendChild(hobbyInput);
  }

  // Show OK button
  okButton.style.display = "block";
});

// OK button click handler
okButton.addEventListener("click", () => {
  // Create hobby radio elements
  const hobbyRadios = hobbyInputs.map((hobbyInput) => {
    const hobbyRadio = document.createElement("input");
    hobbyRadio.type = "radio";
    hobbyRadio.name = "hobby";
    hobbyRadio.value = hobbyInput.value;
    hobbyRadio.className = "form-check-input";
    hobbyRadio.id = `hobby${hobbyInputs.indexOf(hobbyInput)}`;
    hobbyRadio.required = true;
    return hobbyRadio;
  });

  // Create hobby label elements
  const hobbyLabels = hobbyInputs.map((hobbyInput, index) => {
    const hobbyLabel = document.createElement("label");
    hobbyLabel.htmlFor = `hobby${index}`;
    hobbyLabel.className = "form-check-label";
    hobbyLabel.textContent = hobbyInput.value;
    return hobbyLabel;
  });

  // Create hobby container
  const hobbyContainer = document.createElement("div");
  hobbyContainer.className = "form-check";

  // Add hobby radios and labels to container
  hobbyRadios.forEach((hobbyRadio, index) => {
    hobbyContainer.appendChild(hobbyRadio);
    hobbyContainer.appendChild(hobbyLabels[index]);
  });

  // Add container to selected hobby container
  selectedHobbyContainer.appendChild(hobbyContainer);

  // Create OK button for hobby selection
  const okButtonHobby = document.createElement("button");
  okButtonHobby.className = "btn btn-primary m-lg-3";
  okButtonHobby.textContent = "OK";
  okButtonHobby.id = "okButtonHobby";
  okButtonRadioParent.appendChild(okButtonHobby);

  // Hide hobby input elements
  hobbyInputs.forEach((hobbyInput) => {
    hobbyInput.style.display = "none";
  });

  // Show OK button for hobby selection
  okButtonHobby.style.display = "block";

  // Hide OK button
  okButton.style.display = "none";
});

// OK button for hobby selection click handler
const okButtonHobby = document.querySelector("#okButtonHobby");
okButtonHobby.addEventListener("click", () => {
  // Create result container
  const result = document.createElement("div");
  result.className = "alert alert-primary";
  result.role = "alert";

  // Create result text
  const resultText = document.createElement("p");
  resultText.textContent = `Hallo, ${firstNameInput.value} ${lastNameInput.value}, dengan email ${emailInput.value}, saya mempunyai sejumlah ${hobbyInputs.length} pilihan hobi yaitu ${[...hobbyInputs]
    .map((hobbyInput, index) => `${index + 1}. ${hobbyInput.value}`)
    .join(", ")}. Dan saya menyukai ${[...hobbyRadios]
    .filter((hobbyRadio) => hobbyRadio.checked)
    .map((hobbyRadio) => hobbyInputs[hobbyRadios.indexOf(hobbyRadio)].value)
    .join(", ")}.`;

  // Add result text to result container
  result.appendChild(resultText);

  // Add result container to selected hobby container
  selectedHobbyContainer.appendChild(result);

  // Hide OK button for hobby selection
  okButtonHobby.style.display = "none";
});
