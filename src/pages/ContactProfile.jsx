import React from "react";
import styles from "./ContactProfile.module.css";

const ContactProfile = () => {
  return (
    <div className={styles.container}>
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-3 backdrop-blur-sm dark:bg-background-dark/80">
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-zinc-900 dark:text-white">
          Contact Details
        </h1>
        <div className="w-10"></div>
      </header>
      <main className="p-4">
        <div className={styles.profileCard}>
          <div
            className="h-32 w-32 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_RIKN7vOOgxqVugCH0Dq3VVTugIScxB7zzmKrVGNrmmtU7skoOaiOb_5b9gg2RgYHFVSviTEmfHKc_IaY7OcCqPmz9XVPO8XanPGwUL1b6vT5WaAaf24lABK0YyDmbdCgKoz3-0x_WQ3-kdoOoHT602DpGWkQ-LIlzh7vGyk-EUVrvXE5QVXxDfztcgSD2NBe2UoqWbayADJp6Lt3slJBcUBkdlWNtjMDhI8k3B1s5-YucOUd8nfic-Mum4Hg8i67xfic0Nu-6yk')",
            }}
          ></div>
          <div className="text-center">
            <p className={styles.profileName}>John Doe</p>
            <p className={styles.profileDetails}>Email: john.doe@example.com</p>
            <p className={styles.profileDetails}>Phone: +123456789</p>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="px-4 pb-2 text-lg font-bold text-zinc-900 dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-1 rounded-xl bg-white dark:bg-zinc-800/50">
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    ethan.carter@buildsmart.com
                  </p>
                </div>
              </div>
              <hr className="border-zinc-200 dark:border-zinc-700 ml-20" />
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Phone
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <hr className="border-zinc-200 dark:border-zinc-700 ml-20" />
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Address
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    123 Main St, Anytown, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="px-4 pb-2 text-lg font-bold text-zinc-900 dark:text-white">
              Communication History
            </h2>
            <div className="px-4">
              <div className="relative">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="relative space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/30">
                      <span className="material-symbols-outlined">
                        calendar_today
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        Initial Meeting
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        2 weeks ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/30">
                      <span className="material-symbols-outlined">send</span>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        Proposal Sent
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        1 week ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/30">
                      <span className="material-symbols-outlined">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        Follow-up Call
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="px-4 pb-2 text-lg font-bold text-zinc-900 dark:text-white">
              Associated Opportunities
            </h2>
            <div className="space-y-1 rounded-xl bg-white dark:bg-zinc-800/50">
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">
                    business_center
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Project X - HVAC System Upgrade
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Value: $50,000
                  </p>
                </div>
              </div>
              <hr className="border-zinc-200 dark:border-zinc-700 ml-20" />
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">
                    business_center
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    Project Y - Plumbing Renovation
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Value: $20,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="sticky bottom-0 border-t border-zinc-200 bg-background-light/90 pb-4 pt-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-background-dark/90">
        <nav className="flex justify-around">
          <a
            className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-xs font-medium">Leads</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <span className="material-symbols-outlined">contacts</span>
            <span className="text-xs font-medium">Contacts</span>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default ContactProfile;