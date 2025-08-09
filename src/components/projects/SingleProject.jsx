import { useParams } from 'react-router-dom';
import singleProjectData from '../../data/singleProjectData';

const SingleProject = () => {
    const { id } = useParams();
    const project = singleProjectData.find((p) => p.id === Number(id));

    if (!project)
        return (
            <div className="text-center text-red-600 text-xl mt-20">
                Project not found
            </div>
        );

    return (
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl px-4 py-8 sm:px-8 sm:py-12 my-8 sm:my-12">
            {/* Header */}
            <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark dark:text-primary-light mb-2 tracking-tight">
                    {project.ProjectHeader.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-semibold">
                        {project.ProjectHeader.tags}
                    </span>
                    <span>{project.ProjectHeader.publishDate}</span>
                </div>
            </div>

            {/* Images */}
      {/* Images */}
<div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-10">
    {project.ProjectImages.map((img) => (
        <div
            key={img.id}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50 dark:bg-gray-800"
        >
            <img
                src={img.img}
                alt={img.title}
                className="w-80 h-56 sm:w-[32rem] sm:h-[22rem] object-cover"
            />
            <div className="bg-gray-100 dark:bg-gray-800 text-center py-2 text-xs text-gray-700 dark:text-gray-300">
                {img.title}
            </div>
        </div>
    ))}
</div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-10">
                {/* Company Info */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-3">
                        {project.ProjectInfo.ClientHeading}
                    </h2>
                    <ul className="space-y-2">
                        {project.ProjectInfo.CompanyInfo.map((info) => (
                            <li key={info.id} className="flex items-center">
                                <span className="font-semibold text-primary-dark dark:text-primary-light w-24 sm:w-28">
                                    {info.title}:
                                </span>
                                <span className="ml-2 text-gray-700 dark:text-gray-300 break-all">
                                    {info.details}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Objectives */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-3">
                        {project.ProjectInfo.ObjectivesHeading}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        {project.ProjectInfo.ObjectivesDetails}
                    </p>
                </div>
            </div>

            {/* Technologies */}
            <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-3">
                    {project.ProjectInfo.Technologies[0].title}
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.ProjectInfo.Technologies[0].techs.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Details */}
            <div className="mb-4 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-dark dark:text-secondary-light mb-3">
                    {project.ProjectInfo.ProjectDetailsHeading}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {project.ProjectInfo.ProjectDetails.map((detail) => (
                        <li key={detail.id}>{detail.details}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleProject;