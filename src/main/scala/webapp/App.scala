package webapp
import org.scalajs.dom
import scalatags.JsDom.all._
import dom.html
import org.scalajs.dom.raw.Node
object App{

  def main(args: Array[String]): Unit = {

    val btn = button(
      "File 1",
      onclick := { () =>
        dom.window.alert("Hello, world")
      })


    val btn1 = button(
      "File 2",
      onclick := { () =>
        dom.window.alert("Hello, world")
      })
    val child = dom.document
      .createElement("div")
    val child1 = dom.document
      .createElement("div")
    val child2 = dom.document
      .createElement("div")

    child.textContent =
      "1. Documents-A"
    child1.textContent =
      "2. Documents-B"
    child2.textContent =
      "3. Documents-C"
    // intentional overkill to demonstrate scalatags
    val content =
      div(cls := "foo",
        div(cls := "bar",
          h2("Hello"),
          child,
          child1,
          child2,
          btn,
          btn1

        )
      )

    val root = dom.document.getElementById("root")
    root.innerHTML = ""
    root.appendChild(content.render)

  }

}