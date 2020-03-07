enablePlugins(ScalaJSPlugin)

name := "Scala.js repo"

version := "0.1"

scalaVersion := "2.13.1"
scalaJSUseMainModuleInitializer := true
mainClass in Compile := Some("webapp.App")
libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"
libraryDependencies += "com.lihaoyi" %%% "scalatags" % "0.8.6"
