export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-[#161615] rounded-lg shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] p-6 lg:p-12">
                    <h1 className="text-3xl font-bold text-[#1b1b18] dark:text-[#EDEDEC] mb-6">
                        SomtamCoin Privacy Policy
                    </h1>
                    
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-[#1b1b18] dark:text-[#EDEDEC] mb-6">
                            Welcome to the SomtamCoin app
                        </p>

                        <p className="mb-6">
                            This is an open source app developed by Somtam Labs. The source code is available on 
                            <a 
                                href="https://github.com/yourusername/somtamcoin" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                GitHub
                            </a> under the GNU AGPL license (3.0 or later).
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC] mt-8 mb-4">
                            Our Commitment to Privacy
                        </h2>
                        <p className="mb-6">
                            We take your privacy very seriously. We understand how frustrating it is when apps collect your data without your knowledge.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC] mt-8 mb-4">
                            Data Collection
                        </h2>
                        <p className="mb-4">
                            We hereby state, to the best of our knowledge and belief, that we have not programmed this app to collect any personally identifiable information.
                        </p>
                        <p className="mb-4">
                            All data (including app preferences like theme) created by you is stored locally on your device only. This data can be completely removed by:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Clearing the app's data in your device settings</li>
                            <li>Uninstalling the app from your device</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC] mt-8 mb-4">
                            Analytics
                        </h2>
                        <p className="mb-6">
                            No analytics or tracking software is present in this app. We don't track your usage or collect any statistics.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC] mt-8 mb-4">
                            Changes to This Policy
                        </h2>
                        <p className="mb-6">
                            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
                        </p>

                        <div className="mt-12 pt-6 border-t border-[#e3e3e0] dark:border-[#3E3E3A]">
                            <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                Last updated: October 30, 2025
                            </p>
                        </div>
                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            For any questions or concerns, please contact us at: 
                            <a 
                                href="mailto:somtam.xyz@gmail.com" 
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                somtam.xyz@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}