import("./dotos.js");
const addForm = document.forms.addForm;
const addInput = addForm.input;
const addBtn = addForm.btn;

const todoFilter = document.querySelector("#yourTodoFilterId");
const todoItems = document.querySelector(".todo-items");
const validation = (arr, parent) => {
  if (!Array.isArray(arr)) {
    console.warn("Data must be array");
  }

  if (!parent) {
    console.warn("nothing to show");
  }
};

const render = (arr, parent) => {
  //   if (!validation(arr, parent)) {
  //     console.log("---");
  //     return;
  //   }

  let todoCheck;

  todoItems.innerHTML = arr
    .map((el, i) => {
      return `
    <li class="todo-item">
        <span>
            ${i + 1}
        </span>
        <input type="checkbox" ${el.complited ? "checked" : ""}>
        <p style="${
          el.complited
            ? "text-decoration: line-through;"
            : "text-decoration: none;"
        }">${el.text}</p>
        <button class="btn del">-</button>
    </li>
    `;
    })
    .join("");

  todoCheck = document.querySelectorAll(".todo-item input");
  todoCheck.forEach((el, i) => {
    el.onchange = () => {
      el.nextElementSibling.style.textDecoration = el.checked
        ? "line-through"
        : "none";
      todos[i].complited = el.checked;
      console.log(todos);
    };
  });

  const delBtn = document.querySelectorAll(".del");
  delBtn.forEach((el, i) => {
    el.addEventListener("click", (el) => {
      if (todoFilter.value == "DateN") {
        todos.reverse().splice(i, 1);
        render([...todos].reverse(), todoItems)
      } else {
        todos.splice(i, 1);
        render(todos, todoItems)
      }
    });
    console.log(todos);
  });
};

render(todos, todoItems)


addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  tod = { text: `${addInput.value}`, complited: false };
  addInput.value.length != 0 ? todos.push(tod) : console.warn("nothing to do");
  todoFilter.value == "DateO"
    ? render(todos, todoItems)
    : render([...todos].reverse(), todoItems);
});

todoFilter.onchange = () => {
  todoFilter.value == "DateN"
    ? render([...todos].reverse(), todoItems)
    : render(todos, todoItems);
};




