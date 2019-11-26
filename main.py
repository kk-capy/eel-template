import eel
import sys
from logging import getLogger, basicConfig

basicConfig()
logger = getLogger(__name__)
eel.init("assets")


@eel.expose
def get_python_ver():
  return sys.version


eel.start("main.html")
