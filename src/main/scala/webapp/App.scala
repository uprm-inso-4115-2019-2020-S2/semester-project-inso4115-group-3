package webapp
import org.scalajs.dom
import scalatags.JsDom.all._
import dom.html
import org.scalajs.dom.raw.Node

object App{

  def main(args: Array[String]): Unit = {

    val btn = button(
      "Upload",
      onclick := { () =>
        dom.window.alert("To be implemented")
      })


    val btn1 = button(
      "Download",
      onclick := { () =>
        dom.window.alert("To be implemented")
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

    val content =
      div(
          h2("CESCO offical papers retrieval"),
          child,
          child1,
          child2,
          btn,
          btn1
      )

    val root = dom.document.getElementById("root")
    root.innerHTML = ""
    root.appendChild(content.render)

  }

}