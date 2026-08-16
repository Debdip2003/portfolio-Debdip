import React, { useState, useEffect } from "react";
import { GitPullRequest, ExternalLink, Activity, CheckCircle2, CircleDashed } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, scaleUp } from "../utils/motionVariants";

export default function GithubDashboard() {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { profile } = portfolioData;

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

  const scrollingPrs = [...prs, ...prs];

  const getRepoName = (repoUrl) => {
    return repoUrl.replace("https://api.github.com/repos/", "");
  };

  return (
    <section id="github-activity" className="py-24 md:py-32 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest font-mono block mb-2">
              Contribution Dashboard
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white">GitHub Activity & PR Stream</h2>
          </div>
          <p className="text-stone-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Real-time telemetry combining historical commit consistency with continuous pull request deployments.
          </p>
        </motion.div>

        {/* Dual-View Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Calendar Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleUp}
            className="lg:col-span-7 flex flex-col w-full min-h-[380px]"
          >
            <div className="bg-stone-900/30 border border-white/10 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full luxury-border-glow">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full filter blur-[90px] pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1 justify-center min-w-0">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-6 h-6 text-stone-200" />
                    <h3 className="text-xl font-display text-white">Commit Heatmap</h3>
                  </div>
                  <span className="text-xs font-mono text-orange-400">@Debdip2003</span>
                </div>

                <div className="w-full overflow-x-auto py-2 hide-scrollbar">
                  <div className="min-w-max pb-1 text-stone-200 font-mono opacity-95">
                    <GitHubCalendar
                      username="Debdip2003"
                      colorScheme="dark"
                      blockSize={12}
                      blockMargin={4}
                      fontSize={12}
                    />
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mt-6 relative z-10 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 bg-stone-950 px-4 py-2 border border-white/10 text-xs font-mono text-stone-300">
                  <Activity className="w-4 h-4 text-orange-500" />
                  <span>Consistent Open Source Cadence</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-950 px-4 py-2 border border-white/10 text-xs font-mono text-stone-300">
                  <GitPullRequest className="w-4 h-4 text-purple-400" />
                  <span>Live Feed Connected</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live PR Ticker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleUp}
            className="lg:col-span-5 h-[420px] min-h-0 bg-stone-900/30 border border-white/10 relative overflow-hidden flex flex-col luxury-border-glow"
          >
            {/* Header */}
            <div className="p-4 md:p-5 border-b border-white/10 relative z-20 bg-stone-950/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-orange-500 animate-pulse" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-white">Live PR Stream</h3>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>

            {/* Scrolling PR stream */}
            <div className="relative flex-1 overflow-hidden">
              {/* Fade Overlays */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              {loading ? (
                <div className="flex flex-col gap-3 p-4 justify-center h-full">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 w-full bg-stone-950/60 border border-white/5 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3 p-4 animate-marquee-vertical hover:[animation-play-state:paused] overflow-y-auto hide-scrollbar h-full">
                  {scrollingPrs.map((pr, idx) => {
                    const isMerged = !!pr.pull_request?.merged_at;
                    const isClosed = pr.state === "closed";

                    let statusColor = "text-emerald-400 border-emerald-500/20 bg-emerald-500/10";
                    let StatusIcon = CheckCircle2;
                    let statusText = "Open";

                    if (isMerged) {
                      statusColor = "text-purple-400 border-purple-500/20 bg-purple-500/10";
                      statusText = "Merged";
                      StatusIcon = GitPullRequest;
                    } else if (isClosed) {
                      statusColor = "text-stone-400 border-stone-500/20 bg-stone-500/10";
                      statusText = "Closed";
                      StatusIcon = CircleDashed;
                    }

                    return (
                      <motion.a
                        key={`${pr.id}-${idx}`}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        href={pr.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-stone-950/70 border border-white/5 hover:border-orange-500/40 hover:bg-stone-900/80 transition-all group/card"
                      >
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            <FaGithub className="w-3.5 h-3.5 text-stone-500 shrink-0 group-hover/card:text-stone-300" />
                            <span className="text-[11px] font-mono text-stone-400 truncate">
                              {getRepoName(pr.repository_url)}
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-1 text-[9px] font-mono font-semibold px-2 py-0.5 border shrink-0 ${statusColor}`}
                          >
                            <StatusIcon className="w-2.5 h-2.5" />
                            <span className="uppercase tracking-wider">{statusText}</span>
                          </div>
                        </div>

                        <h4 className="text-xs font-medium text-stone-200 line-clamp-2 leading-snug group-hover/card:text-white transition-colors">
                          {pr.title}
                        </h4>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px] font-mono text-stone-500">
                          <span>
                            #{pr.number} • {new Date(pr.created_at).toLocaleDateString()}
                          </span>
                          <ExternalLink className="w-3 h-3 text-stone-600 group-hover/card:text-orange-400" />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
