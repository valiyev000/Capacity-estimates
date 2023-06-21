import './App.scss'
import Home from './components/Home';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sprint from './components/Sprint';


function App() {


  let mainData = [
    {
      id: 1,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 2,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 3,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 4,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 5,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 6,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 7,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 8,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    },
    {
      id: 9,
      dataCells: [
        {
          title: "Corporate overhead",
          inputs: [
            {
              id: 1,
              name: "Standups",
              value: 0
            },
            {
              id: 2,
              name: "Planning",
              value: 0
            },
            {
              id: 3,
              name: "Refinement",
              value: 0
            },
            {
              id: 4,
              name: "Chapter sync",
              value: 0
            },
            {
              id: 5,
              name: "Digər görüşlər",
              value: 0
            },
            {
              id: 6,
              name: "Təlim",
              value: 0
            },
            {
              id: 7,
              name: "Şəxsi ehtiyaclar",
              value: 0
            }
          ]
        },
        {
          title: "Unplanned time",
          inputs: [
            {
              id: 1,
              name: "İclaslar",
              value: 0
            },
            {
              id: 2,
              name: "Sorğular",
              value: 0
            },
            {
              id: 3,
              name: "İcazələr",
              value: 0
            }
          ]
        },
        {
          title: "Tasks",
          inputs: [
            {
              id: 1,
              name: "Task 1",
              value: 0
            },
            {
              id: 2,
              name: "Task 2",
              value: 0
            },
            {
              id: 3,
              name: "Task 3",
              value: 0
            },
            {
              id: 4,
              name: "Task 4",
              value: 0
            },
            {
              id: 5,
              name: "Task 5",
              value: 0
            },
            {
              id: 6,
              name: "Task 6",
              value: 0
            },
            {
              id: 7,
              name: "Task 7",
              value: 0
            }
          ]
        }
      ]
    }
  ]



  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home mainData={mainData} /></Route>
        <Route exact path="/sprint/:id"><Sprint/></Route>
      </Switch>
    </Router>
  )
}

export default App