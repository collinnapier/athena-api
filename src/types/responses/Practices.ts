export type FindPracticeResponse = {
    /**
     * The name athenahealth uses internally for this practice. Note that practices may use different names for patients.
     */
  name: string;
    /**
     * This will appear only in athena's demo environment.  The MASTERID is the ID for a master, which is static throughout the lifetime of the master. Though a master's schema number (MASTERCONTEXTID) may change, the MASTERID field will never change.  The MASTERID is analogous to finishing third in a race - you will always be known for finishing third. The MASTERCONTEXTID is analogous to your phone number, which may change if you ditch your phone line for a different carrier.
     */
  masterid: string;
    /**
     * When called with a Context ID, this will return whether or not Cronic Care Management is enabled for the given practice. Currently, this is only available when querying an individual practice (not practice ID 1).
     */
  ccmenabled: boolean;
    /**
     * The date that this practice went (or will go) live in athenaNet. Note that, if in the future, this date might change as implementations are moved around.
     */
  golivedate: string;
    /**
     * When called with a Context ID, this will return whether or not New Schedule Admin is enabled for the given practice.
     */
  nsaenabled: boolean;
    /**
     * The athenaNet practice ID.
     */
  practiceid: string;
    /**
     * When available, one or more names that the practices uses externally from athenaCommunicator.  Again, this name should be verified with the practice before using it for patients.  Currently, this is only available when querying an individual practice (not practice ID 1).
     */
  publicnames: string;
    /**
     * Does this practice use athenaClinicals.
     */
  hasclinicals: boolean;
    /**
     * Does this practice use athenaCollector.
     */
  hascollector: boolean;
    /**
     * This is a practice setting which is set to one of the following: STREAMLINEDONLY or CLASSICONLY
     */
  experiencemode: string;
    /**
     * Does this practice use athenaCommunicator.
     */
  hascommunicator: boolean;
    /**
     * This will appear only in athena's demo environment, and indicates the context ID (Practice's ID number) of the practice this was copied from. Please note - a master's context ID may change roughly once per week in the future. If you need to refer to a master context in a static manner, see MASTERID.
     */
  mastercontextid: string;
    /**
     * This will appear only in athena's demo environment, and indicates the name of the practice this was copied from.
     */
  mastercontextname: string;
  iscoordinatorsender: boolean;
  iscoordinatorreceiver: boolean;
}
