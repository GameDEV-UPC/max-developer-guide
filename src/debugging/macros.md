# Debug macros

As per the [style guidelines](../contributing/style/index.md), using
`<iostream>` on the Max codebase is forbidden. It is for this reason that Max
ships some debugging macros to print information to the terminal. They live
at the `Debug.hpp` file.

> **Note:** Debug macros only display the messages on [debug builds](../setup/building/debug.md).

There are six debugging macros included with Max:
- `show()`: Prints the message unconditionally in bright purple. This macro is
  used when you want to display some information ONLY during the development
  stage and plan to remove it later.
  ```cpp
  // my_sum_function.cpp
  int sum(int lhs, int rhs) {
      show("The first number is ", lhs, "!");
      return lhs + rhs;
  }
  int result = sum(2, 4);
  ```
  ![show() macro](img/show_macro.svg)

- `trace()`: Used for maximum verbosity messages. Information that you generally
  wouldn't want to see, but that is useful to have if you're trying to determine
  the exact state of the engine.
  ```cpp
  // RenderManager/shaders/DefaultShaderInv.cpp
  void DefaultShaderInv::initObject(RenderObject *renderObject) {
      glBindVertexArray(renderObject->getVAO());
      trace("Bound VBO: ", renderObject->getVBO()[0]);
      glBindBuffer(GL_ARRAY_BUFFER, renderObject->getVBO()[0]);
      // ...
  }
  ```
  ![trace() macro](img/trace_macro.svg)

- `debug()`: Used for medium verbosity messages. Information that lets you track
  the general state of Max, but not granular enough to tell exactly what it's
  currently doing.
  ```cpp
  // InputManager/InputManager.cpp
  MXbool InputManager::isJoistickConnected() {
      MXbool connected = glfwJoystickPresent(GLFW_JOYSTICK_1) == GLFW_TRUE;
      if (connected) debug("Joystick connected.");
      return connected;
  }
  ```
  ![debug() macro](img/debug_macro.svg)

- `info()`: Used for information you always want to have.
  ```cpp
  // EngineLogic/MaxBuilder.cpp
  Max MaxBuilder::build() {
      // ...
      Input = new InputManager();
      Camera *camera = new Camera(_screen_width, _screen_height);
      Render = new RenderManager(_screen_width, _screen_height, camera);
      Max max(_camera, _scene, _window);

      info("New Max instance created.");
      return max
  }
  ```
  ![info() macro](img/info_macro.svg)

- `warn()`: Used to indicate something went wrong, but that it is not a critical
  issue and the engine can recover from it.
  ```cpp
  // RenderManager/ModelLoader.cpp
  ModelObject *ModelLoader::create_model_object(std::string name, const MXchar *model_src) {
      Assimp::Importer importer;
      const aiScene *scene = importer.ReadFile(
          model_src, aiProcess_Triangulate | aiProcess_FlipUVs | aiProcess_PreTransformVertices | aiProcess_GenNormals);

      if (!scene || scene->mFlags & AI_SCENE_FLAGS_INCOMPLETE || !scene->mRootNode) {
          warn("File ", model_src, " does not contain a model!");
          // ...
      }
      // ...
  }
  ```
  ![warn() macro](img/warn_macro.svg)

- `error()`: Used for critical errors the engine cannot recover from, and most
  likely result in a crash.
  ```cpp
  // EngineLogic/MaxBuilder.cpp
  Max MaxBuilder::build() {
      // ...

      if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
          error("GLAD failed to initialize");
          throw BuildExeption(Cause::Faliure, Item::Internal);
      }

      // ...
  }
  ```
  ![error() macro](img/error_macro.svg)

As you will have noticed, their structure is: `DEBUG_LEVEL [file_name:function_name:line_number] user message`.

Besides `show()`, debug macro messages will not be displayed by default, even on
debug builds. They have to be enabled through the `LOG_LEVEL` environment
variable.

The levels correspond to the macro names, and are ordered from least
to most verbosity in the following list: `ERROR < WARN < INFO < DEBUG < TRACE`.
Enabling a debug level automatically enables all the previous ones on the list.

`LOG_LEVEL=INFO ./my_max_game` Will show ERROR, WARN and DEBUG messages.
