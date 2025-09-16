export type Content = {
  id: string;
  title: string;
  description: string;
  type: 'Blog Post' | 'Video';
  topic: 'DevOps' | 'SRE' | 'CI/CD' | 'Cloud';
  status: 'Published' | 'Draft' | 'Scheduled';
  publicationDate: string;
  content: string;
};

export const contentData: Content[] = [
  {
    id: 'content-1',
    title: 'Mastering CI/CD Pipelines',
    description: 'A deep dive into building robust and efficient CI/CD pipelines for modern applications.',
    type: 'Blog Post',
    topic: 'CI/CD',
    status: 'Published',
    publicationDate: '2023-10-26',
    content: 'Continuous Integration and Continuous Deployment (CI/CD) are cornerstones of modern DevOps practices. This post explores advanced techniques...'
  },
  {
    id: 'content-2',
    title: 'Introduction to Site Reliability Engineering',
    description: 'Learn the fundamental principles of SRE and how to apply them to improve system reliability.',
    type: 'Video',
    topic: 'SRE',
    status: 'Published',
    publicationDate: '2023-10-20',
    content: 'Site Reliability Engineering (SRE) is what you get when you treat operations as a software problem. This video covers SLOs, error budgets, and more.'
  },
  {
    id: 'content-3',
    title: 'Effective Monitoring for Distributed Systems',
    description: 'Explore strategies and tools for monitoring complex, distributed systems in the cloud.',
    type: 'Blog Post',
    topic: 'SRE',
    status: 'Published',
    publicationDate: '2023-09-15',
    content: 'Monitoring is not just about collecting metrics. It\'s about gaining insights into your system\'s health and performance. We will cover the pillars of observability.'
  },
  {
    id: 'content-4',
    title: 'Automating Infrastructure with Terraform',
    description: 'A practical guide to getting started with Infrastructure as Code (IaC) using Terraform.',
    type: 'Video',
    topic: 'DevOps',
    status: 'Published',
    publicationDate: '2023-09-01',
    content: 'In this video, we walk through setting up a complete cloud environment using Terraform. From VPCs to Kubernetes clusters, you will learn how to automate everything.'
  },
  {
    id: 'content-5',
    title: 'The DevOps Handbook: Key Takeaways',
    description: 'A summary of the most important concepts from the essential guide to DevOps.',
    type: 'Blog Post',
    topic: 'DevOps',
    status: 'Draft',
    publicationDate: '2023-11-05',
    content: 'The DevOps Handbook provides a framework for technology leaders. This post distills its core principles: The Three Ways.'
  },
  {
    id: 'content-6',
    title: 'Kubernetes Best Practices',
    description: 'A video covering best practices for deploying and managing applications on Kubernetes.',
    type: 'Video',
    topic: 'Cloud',
    status: 'Scheduled',
    publicationDate: '2023-11-10',
    content: 'Avoid common pitfalls when using Kubernetes. This session covers resource management, security, and deployment strategies.'
  },
   {
    id: 'content-7',
    title: 'Multi-Cloud Strategy: Pros and Cons',
    description: 'An analysis of when and why a multi-cloud strategy makes sense for your organization.',
    type: 'Blog Post',
    topic: 'Cloud',
    status: 'Published',
    publicationDate: '2023-08-22',
    content: 'Going multi-cloud can offer flexibility and avoid vendor lock-in, but it also introduces complexity. This article weighs the benefits and drawbacks to help you make an informed decision.'
  },
  {
    id: 'content-8',
    title: 'On-Call Best Practices for SREs',
    description: 'A video guide to establishing a healthy and effective on-call rotation for your SRE team.',
    type: 'Video',
    topic: 'SRE',
    status: 'Published',
    publicationDate: '2023-08-10',
    content: 'Being on-call doesn\'t have to be painful. Learn how to implement strategies like blameless postmortems, incident management protocols, and fair scheduling to create a sustainable on-call culture.'
  }
];

export const availableResources = contentData.map(c => `${c.title} (${c.type}): ${c.description}`);

export type TrainingSession = {
  id: string;
  clientName: string;
  date: Date;
  topic: string;
};

export const trainingSessions: TrainingSession[] = [
  {
    id: 'session-1',
    clientName: 'Alice Johnson',
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    topic: 'CI/CD Pipeline Review',
  },
  {
    id: 'session-2',
    clientName: 'Bob Williams',
    date: new Date(new Date().setDate(new Date().getDate() + 3)),
    topic: 'SRE Principles Workshop',
  },
  {
    id: 'session-3',
    clientName: 'Charlie Brown',
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    topic: 'Terraform Code Review',
  },
  {
    id: 'session-4',
    clientName: 'Diana Prince',
    date: new Date(new Date().setDate(new Date().getDate() + 10)),
    topic: 'Intro to Kubernetes',
  },
];

export const clientSkillLevels = ['Beginner', 'Intermediate', 'Expert'];
export const devOpsFocuses = ['CI/CD', 'Automation', 'Monitoring', 'Cloud Infrastructure', 'SRE Principles'];
