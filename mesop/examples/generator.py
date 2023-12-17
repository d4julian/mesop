from time import sleep

import mesop as me


def generate_str():
  yield "foo"
  sleep(1)
  yield "bar"


@me.stateclass
class State:
  string: str = ""


@me.on(me.ClickEvent)
def button_click(action: me.ClickEvent):
  state = me.state(State)
  for val in generate_str():
    state.string += val
    yield


@me.page(path="/generator")
def main():
  state = me.state(State)
  with me.button(on_click=button_click):
    me.text(text="click")
  me.text(text=f"{state.string}")