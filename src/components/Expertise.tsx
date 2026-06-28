import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartPie,faBrain } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PowerBI","SQL","Python","Databricks","PySpark","MS SQL Server","Data Modeling","Data Visualisation","Data Cleaning","ETL"
];

const labelsSecond = [
    "Python","Pandas","NumPy","Scikit-Learn","Matplotlib","Tensorflow","Keras","OpenCV","PyTorch"
];

const labelsThird = [
    "OpenAI",
    "Claude",
    "n8n Agents",
    "Hugging Face",
    "Streamlit","FastAPI","Streamlit"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartPie} size="3x"/>
                    <h3>Data Analytics and Engineering</h3>
                    <p>Built end-to-end projects showcasing expertise in data analytics, data engineering, ETL pipelines, SQL, Python, Power BI, and cloud-based data workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science</h3>
                    <p>Built data science projects leveraging machine learning, deep learning, and statistical techniques to extract insights and create intelligent solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Staying at the forefront of AI by experimenting with cutting-edge models, frameworks, and emerging technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;