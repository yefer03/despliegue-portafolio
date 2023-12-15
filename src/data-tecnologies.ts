import js from "./assets/images-tecnologies/javascript2.svg";
import html from "./assets/images-tecnologies/html.svg";
import css from "./assets/images-tecnologies/css.svg";
import react from "./assets/images-tecnologies/reactjs.svg";
import node from "./assets/images-tecnologies/nodejs.svg";
import python from "./assets/images-tecnologies/python.svg";
import mongo from "./assets/images-tecnologies/mongodb.svg";
import sqlServer from "./assets/images-tecnologies/sql-server.svg";
import mysql from "./assets/images-tecnologies/mysql.svg";
import bootstrap from "./assets/images-tecnologies/bootstrap.svg";
import tailwind from "./assets/images-tecnologies/tailwind.svg";
import ofimaticas from "./assets/images-tecnologies/microsoft.svg";



interface Tecnologies {

  id: number;
  name: string;
  img: string;

};


export const tecnologies: Tecnologies[] = [
  {
    id: 0,
    name: 'Javascript',
    img: js,
  },
  {
    id: 1,
    name: 'HTML',
    img: html,
  },
  {
    id: 2,
    name: 'CSS',
    img: css,
  },
  {
    id: 3,
    name: 'React JS',
    img: react,
  },
  {
    id: 4,
    name: 'Node Js',
    img: node,
  },
  {
    id: 5,
    name: 'Python',
    img: python,
  },
  {
    id: 6,
    name: 'Mongodb',
    img: mongo,
  },
  {
    id: 7,
    name: 'SQL Server',
    img: sqlServer,
  },
  {
    id: 8,
    name: 'My SQL',
    img: mysql,
  },
  {
    id: 9,
    name: 'Bootstrap',
    img: bootstrap,
  },
  { 
    id: 10,
    name: 'Tailwind css',
    img: tailwind,
  },
  {
    id: 11,
    name: 'Herramientas Ofimaticas',
    img: ofimaticas,
  },

];
