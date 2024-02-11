const elmOne = document.querySelector(".tagOne");
elmOne.addEventListener("click", scrollFunctionTagOne);

function scrollFunctionTagOne() {
  const targetElOne = document.querySelector(".tagTwo");
  targetElOne.scrollIntoView({ behavior: "smooth" });
}
/* </> --- </>  </> --- </>  </> --- </>  </> --- </>  </> --- </>  </> --- </> */
const elmTwo = document.querySelector(".tagTwo");
elmTwo.addEventListener("click", scrollFunctionTagTwo);

function scrollFunctionTagTwo() {
  const targetElTwo = document.querySelector(".tagOne");
  targetElTwo.scrollIntoView({ behavior: "smooth" });
}
