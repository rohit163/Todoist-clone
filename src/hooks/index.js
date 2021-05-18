import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

//for getting the tasks

export const useTask = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchievedTasks] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "caY9aPiRCJHZlKLqCjJf");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    // eslint-disable-next-line no-unused-vars
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );

      setArchievedTasks(newTasks.filter((task) => task.archived !== false));

      return () => unsubscribe();
    });
  }, [selectedProject]);
  return { tasks, archivedTasks };
};
//for getting the projects
export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("iserId", "==", "caY9aPiRCJHZlKLqCjJf")
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
    // return () => {
    //     cleanup
    // }
    return { projects, setProjects };
  }, [projects]);
};
