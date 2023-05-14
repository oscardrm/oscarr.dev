import { FaReact, FaPhp, FaAngular, FaDotCircle, FaLaravel, FaDocker, FaBootstrap } from "react-icons/fa";
import { DiBootstrap, DiDotnet, DiMaterializecss } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import {
    // SiMaterialUi,
    SiNextdotjs,
    SiNestjs, SiChakraui, SiRedux, SiGraphql, SiFirebase, SiIonic, SiBootstrap, SiSupabase, SiPostgresql, SiMongodb, SiAxios, SiRedis, SiJenkins, SiRabbitmq
} from "react-icons/si";

export default interface SkillsInterface {
    name: string;
    icon: any;
    color: string
    boxSize: number;
    mr: number;
}

const frontSkillsArray: SkillsInterface[] = [
    {
        name: "JavaScript",
        icon: FaDotCircle,
        color: "gray.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "React",
        icon: FaReact,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Angular",
        icon: FaAngular,
        color: "red.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Redux",
        icon: SiRedux,
        color: "red.500",
        boxSize: 6,
        mr: 2,
    },

    {
        name: "Materializecss",
        icon: DiMaterializecss,
        color: "pink.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "ChakraUI",
        icon: SiChakraui,
        color: "green.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "ReactQuery",
        icon: FaReact,
        color: "pink.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "IONIC",
        icon: SiIonic,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Axios",
        icon: SiAxios,
        color: "purple.500",
        boxSize: 6,
        mr: 2,
    },
];

const backSkillsArray: SkillsInterface[] = [
    {
        name: "Nest.js",
        icon: SiNestjs,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "PHP",
        icon: FaPhp,
        color: "purple.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Laravel",
        icon: FaLaravel,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: ".NET",
        icon: DiDotnet,
        color: "purple.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "GraphQL",
        icon: SiGraphql,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Docker",
        icon: FaDocker,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Supabase",
        icon: SiSupabase,
        color: "green.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "gray.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Mysql",
        icon: GrMysql,
        color: "blue.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "green.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "FirebaseDB",
        icon: SiFirebase,
        color: "yellow.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Redis",
        icon: SiRedis,
        color: "red.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "Jenkins",
        icon: SiJenkins,
        color: "gray.500",
        boxSize: 6,
        mr: 2,
    },
    {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "orange.500",
        boxSize: 6,
        mr: 2,
    },

];

export { frontSkillsArray, backSkillsArray }
