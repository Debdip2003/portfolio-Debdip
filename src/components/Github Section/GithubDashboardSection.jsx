import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, ExternalLink, Activity, CheckCircle2, CircleDashed, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GitHubCalendar } from "react-github-calendar";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const GithubDashboardSection = ({ isDarkMode }) => {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch PRs
  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const response = await fetch("https://api.github.com/search/issues?q=author:Debdip2003+type:pr&per_page=15");
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setPrs(data.items);
        }
      } catch (error) {
        console.error("Failed to fetch PRs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPRs();
  }, []);

  // Vertical scroll logic for PRs (infinite marquee)
  const scrollingPrs = [...prs, ...prs];

  const getRepoName = (repoUrl) => {
    return repoUrl.replace("https://api.github.com/repos/", "");
  };

  return (
    <motion.section
      id="github-dashboard"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      {/* Section Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-xs uppercase tracking-widest text-theme-accent font-mono font-semibold">
              Open Source Activity
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-theme-text mb-2">
            Contribution Dashboard
          </h2>
          <p className="text-theme-muted text-base md:text-lg font-light tracking-wide max-w-lg">
            A real-time overview of my open source journey, combining historical consistency with live updates.
          </p>
        </div>
      </motion.div>

      {/* Dual-View Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Calendar Bento */}
        <div className="lg:col-span-7 flex flex-col w-full lg:h-[380px]">
          <div className="ios-glass rounded-[24px] p-5 sm:p-6 border border-theme-border relative overflow-hidden tiffany-glow group w-full h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--accent-primary-subtle)] via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col flex-1 justify-center min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <FaGithub className="w-6 h-6 text-theme-text" />
                <h3 className="text-xl font-medium text-theme-text">GitHub Activity</h3>
              </div>
              
              <div className="w-full overflow-x-auto py-1 scrollbar-hide">
                <div className="min-w-max pb-1 text-theme-text font-mono opacity-95 hover:opacity-100 transition-opacity duration-300">
                  <GitHubCalendar 
                    username="Debdip2003" 
                    colorScheme={isDarkMode ? "dark" : "light"}
                    blockSize={11}
                    blockMargin={4}
                    fontSize={12}
                  />
                </div>
              </div>
            </div>
            
            {/* Stat Badges */}
            <div className="flex flex-wrap gap-3 mt-4 relative z-10 pt-4 border-t border-theme-border/50">
              <div className="flex items-center gap-2 bg-theme-pill px-4 py-2 rounded-full border border-theme-border shadow-sm">
                <Activity className="w-4 h-4 text-theme-accent" />
                <span className="text-xs font-mono text-theme-text">Consistent Contributor</span>
              </div>
              <div className="flex items-center gap-2 bg-theme-pill px-4 py-2 rounded-full border border-theme-border shadow-sm">
                <GitPullRequest className="w-4 h-4 text-purple-500" />
                <span className="text-xs font-mono text-theme-text">Live Feed Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Stream Ticker */}
        <div className="lg:col-span-5 h-[400px] lg:h-[380px] min-h-0 ios-glass rounded-[24px] border border-theme-border relative overflow-hidden flex flex-col bg-theme-bg/30 w-full">
          <div className="p-4 pb-3 border-b border-theme-border/50 relative z-10 bg-theme-bg/50 backdrop-blur-md">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-theme-accent animate-pulse" />
                  <h3 className="text-lg font-medium text-theme-text">Live PR Stream</h3>
                </div>
                <a href="https://github.com/Debdip2003" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-theme-subtle hover:text-theme-accent transition-colors flex items-center gap-1">
                  View All <ExternalLink className="w-3 h-3" />
                </a>
             </div>
          </div>
          
          <div className="relative flex-1 overflow-hidden bg-theme-bg/10">
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-theme-bg to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-theme-bg to-transparent z-20 pointer-events-none" />
            
            {loading ? (
              <div className="flex flex-col gap-4 p-6 justify-center h-full">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-28 w-full rounded-2xl animate-pulse bg-theme-pill/40 border border-theme-border"></div>
                ))}
              </div>
            ) : (
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                className="flex flex-col gap-4 p-6 hover:[animation-play-state:paused]"
              >
                {scrollingPrs.map((pr, idx) => {
                  const isMerged = !!pr.pull_request?.merged_at;
                  const isClosed = pr.state === "closed";
                  
                  let statusColor = "text-green-500 border-green-500/20 bg-green-500/10";
                  let StatusIcon = CheckCircle2;
                  let statusText = "Open";
                  
                  if (isMerged) {
                    statusColor = "text-purple-500 border-purple-500/20 bg-purple-500/10";
                    statusText = "Merged";
                    StatusIcon = GitPullRequest;
                  } else if (isClosed) {
                    statusColor = "text-red-500 border-red-500/20 bg-red-500/10";
                    statusText = "Closed";
                    StatusIcon = CircleDashed;
                  }

                  return (
                    <a
                      key={`${pr.id}-${idx}`}
                      href={pr.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 rounded-2xl bg-theme-card-inner border border-theme-border hover:border-theme-accent-border transition-all hover:bg-theme-card-hover group/card shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-3 gap-3">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FaGithub className="w-4 h-4 text-theme-muted shrink-0 group-hover/card:text-theme-text transition-colors" />
                          <span className="text-xs font-mono text-theme-muted truncate" title={getRepoName(pr.repository_url)}>
                            {getRepoName(pr.repository_url)}
                          </span>
                        </div>
                        <div className={cn("flex items-center gap-1.5 text-[10px] font-bold font-mono px-2 py-1 rounded-full border shrink-0", statusColor)}>
                          <StatusIcon className="w-3 h-3" />
                          <span className="uppercase tracking-wider">{statusText}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-[15px] font-medium text-theme-text line-clamp-2 leading-snug mb-3 group-hover/card:text-theme-accent transition-colors">
                        {pr.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-theme-border/50">
                        <span className="text-xs font-mono text-theme-subtle">
                          #{pr.number} • {new Date(pr.created_at).toLocaleDateString()}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-theme-subtle group-hover/card:text-theme-accent transition-colors opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0" />
                      </div>
                    </a>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
        
      </div>
    </motion.section>
  );
};

export default GithubDashboardSection;
