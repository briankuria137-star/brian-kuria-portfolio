"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const productLaunchUrls: Record<string, string> = {
  "bkm-catalogue": "https://bkm-digital.vercel.app",
  "yobby-kicks": "https://yobby-kicks.vercel.app",
};

const ratingLabels = [
  "Very poor",
  "Poor",
  "Okay",
  "Good",
  "Excellent",
];

interface ProductLabTesterProps {
  productSlug: string;
}

interface ProductReview {
  id: string;
  overall_rating: number;
  feedback: string | null;
  would_use: boolean | null;
  created_at: string;
}

export function ProductLabTester({
  productSlug,
}: ProductLabTesterProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [wouldUse, setWouldUse] = useState<boolean | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStartedAt, setTestStartedAt] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function loadReviews() {
    setLoadingReviews(true);

    const { data, error: reviewsError } = await supabase
      .from("product_reviews")
      .select(
        "id, overall_rating, feedback, would_use, created_at"
      )
      .eq("product_slug", productSlug)
      .order("created_at", { ascending: false });

    if (!reviewsError && data) {
      setReviews(data);
    }

    setLoadingReviews(false);
  }

  useEffect(() => {
    loadReviews();
  }, [productSlug]);

  function startTest() {
    setTestStartedAt(Date.now());
    setTestCompleted(false);
    setSubmitted(false);
  }

  async function handleSubmit() {
    if (!rating || submitting) return;

    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase
      .from("product_reviews")
      .insert({
        product_slug: productSlug,
        overall_rating: rating,
        feedback: feedback.trim() || null,
        would_use: wouldUse,
      });

    if (insertError) {
      setError(
        "We couldn't submit your review right now. Please try again."
      );
      setSubmitting(false);
      return;
    }

    await loadReviews();

    setSubmitted(true);
    setSubmitting(false);
  }

  const averageRating =
    reviews.length > 0
      ? reviews.reduce(
          (total, review) => total + review.overall_rating,
          0
        ) / reviews.length
      : 0;

  const labState = submitted
    ? "reviewed"
    : testCompleted
      ? "completed"
      : hasInteracted
        ? "interacting"
        : testStartedAt
          ? "testing"
          : "discover";

  const labStateStyles: Record<string, string> = {
    discover: "border-teal-600\/40 shadow-[0_0_40px_rgba(13,148,136,0.07)]",
    testing: "border-cyan-500/40 shadow-[0_0_45px_rgba(34,211,238,0.08)]",
    interacting: "border-blue-500/40 shadow-[0_0_55px_rgba(59,130,246,0.10)]",
    completed: "border-amber-500/40 shadow-[0_0_55px_rgba(245,158,11,0.10)]",
    reviewed: "border-yellow-500/50 shadow-[0_0_60px_rgba(234,179,8,0.12)]",
  };

  const labStateLabels: Record<string, string> = {
    discover: "Ready to test",
    testing: "Test in progress",
    interacting: "Interaction detected",
    completed: "Test completed",
    reviewed: "Review received",
  };


  return (
    <div className={`mt-10 border bg-background transition-all duration-700 ${labStateStyles[labState]}`}>
      <div className="border-b border-border px-6 py-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {["discover", "testing", "interacting", "completed", "reviewed"].map((state, index) => {
            const isActive = labState === state;
            const labels = ["Discover", "Testing", "Interacting", "Completed", "Reviewed"];

            return (
              <div key={state} className="flex items-center gap-2">
                <span className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-500 ${isActive ? "text-accent" : "text-muted"}`}>
                  {String(index + 1).padStart(2, "0")} / {labels[index]}
                </span>
                {index < 4 && <span className="text-border" aria-hidden="true">→</span>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-b border-border p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-accent transition-all duration-700"
            aria-hidden="true"
          />

          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-dark">
            {labStateLabels[labState]}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Help shape this product.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Try the product, explore the experience, then tell me what you
              think. Your feedback can directly influence what gets improved
              next.
            </p>
          </div>

          {!loadingReviews && reviews.length > 0 && (
            <div className="shrink-0 border-l-2 border-accent pl-4">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Current rating
              </p>

              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold">
                  {averageRating.toFixed(1)}
                </span>

                <span className="text-sm text-muted">/ 5</span>
              </div>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {reviews.length}{" "}
                {reviews.length === 1 ? "review" : "reviews"}
              </p>
            </div>
          )}
        </div>
      </div>

      {submitted ? (
        <div className="border-b border-border p-8 sm:p-12">
          <div className="border-l-2 border-accent pl-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              Review received
            </p>

            <h4 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Thank you for testing.
            </h4>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Your feedback has been recorded and will help guide future
              improvements to this product.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            <div className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                01 / Test
              </p>

              <h4 className="mt-3 font-display text-xl font-semibold tracking-tight">
                Explore the product
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                Spend a few minutes using the product naturally. Try the
                main features and notice anything that feels confusing,
                useful, slow, or surprisingly good.
              </p>

              {!testStartedAt ? (
                <div className="mt-6 border border-border bg-background p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Test session ready</p>
                  <h5 className="mt-3 font-display text-xl font-semibold tracking-tight">Ready to explore?</h5>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">Start a focused product session. You will be taken into the real product environment, where you can explore the experience before returning here to share your feedback.</p>
                  <button type="button" onClick={startTest} className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary-light">
                    Start Testing
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              ) : (
                productLaunchUrls[productSlug] && (
                <div className="mt-6 overflow-hidden border border-border bg-background">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Live product environment
                    </p>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-accent-dark">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent transition-all duration-700" aria-hidden="true" />
                      Test mode
                    </span>
                  </div>

                  <a href={productLaunchUrls[productSlug]} target="_blank" rel="noopener noreferrer" onClick={() => setHasInteracted(true)} className="group relative flex min-h-[300px] w-full flex-col justify-between overflow-hidden bg-background p-6 text-left transition-colors duration-300 hover:bg-surface sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Product Lab / Live Experience</span><span className="font-mono text-[10px] uppercase tracking-wider text-muted">External ↗</span></div><div><span className="mb-4 block text-4xl font-light text-border transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">→</span><span className="block max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl">Experience the product</span><span className="mt-3 block max-w-lg text-sm leading-relaxed text-muted">Open the live product environment in a new tab and explore the experience for yourself.</span></div><div className="flex items-center gap-3 border-t border-border pt-4"><span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true"></span><span className="font-mono text-[10px] uppercase tracking-wider text-muted">Ready for interaction</span></div></a>
                </div>
                )
              )}

              <div className="mt-6 border-l-2 border-accent pl-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Suggested mission
                </p>

                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                  Create or explore a catalogue and see how quickly you can
                  understand the experience.
                </p>
              </div>
            </div>

            <div className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                02 / Rate
              </p>

              <h4 className="mt-3 font-display text-xl font-semibold tracking-tight">
                How was your experience?
              </h4>

              {!testCompleted && (
                <div className="mt-5 border-l-2 border-accent pl-4">
                  <p className="text-sm leading-relaxed text-muted">
                    Test the product on the left first. When you are finished, unlock the review form below.
                  </p>

                  <button
                    type="button"
                    onClick={() => setTestCompleted(true)}
                    className="mt-4 inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary-light"
                  >
                    I've finished testing
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              )}

              {testCompleted && (
                <div className="mt-5 border-l-2 border-accent pl-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
                    Test complete
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Your review is now unlocked. Rate the experience based on what you just tested.
                  </p>
                </div>
              )}

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        if (!testCompleted) return;
                        setRating(value);
                        setSubmitted(false);
                      }}
                      aria-label={`Rate ${value} out of 5`}
                      aria-pressed={rating === value}
                      className={`flex h-11 w-11 items-center justify-center border font-mono text-sm transition-colors ${
                        rating >= value
                          ? "border-accent bg-accent text-background"
                          : "border-border bg-background text-muted hover:border-accent hover:text-accent-dark"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                <p className="mt-3 font-mono text-xs text-muted">
                  {rating > 0
                    ? ratingLabels[rating - 1]
                    : "Select a rating"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              03 / Would you use it?
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { label: "Yes", value: true },
                { label: "Maybe", value: false },
              ].map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setWouldUse(option.value)}
                  aria-pressed={wouldUse === option.value}
                  className={`border px-4 py-2 text-sm transition-colors ${
                    wouldUse === option.value
                      ? "border-primary bg-primary text-background"
                      : "border-border bg-surface text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              04 / Feedback
            </p>

            <h4 className="mt-3 font-display text-xl font-semibold tracking-tight">
              What should improve?
            </h4>

            <textarea
              rows={5}
              maxLength={2000}
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              placeholder="Tell me what worked, what didn't, or what you would change..."
              className="mt-5 w-full resize-y border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-primary"
            />

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Maximum 2,000 characters
              </p>

              <p className="font-mono text-[10px] text-muted">
                {feedback.length}/2000
              </p>
            </div>

            {error && (
              <p className="mt-4 border-l-2 border-primary pl-4 text-sm text-primary">
                {error}
              </p>
            )}

            <button
              type="button"
              disabled={!rating || submitting}
              onClick={handleSubmit}
              className="mt-7 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Submitting..." : "Submit Review"}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </>
      )}

      <div className="border-t border-border p-6 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-dark">
              05 / Tester feedback
            </p>

            <h4 className="mt-3 font-display text-xl font-semibold tracking-tight">
              What testers are saying
            </h4>
          </div>

          {!loadingReviews && reviews.length > 0 && (
            <p className="font-mono text-xs text-muted">
              {reviews.length} total
            </p>
          )}
        </div>

        {loadingReviews ? (
          <p className="mt-6 text-sm text-muted">
            Loading tester feedback...
          </p>
        ) : reviews.length === 0 ? (
          <div className="mt-6 border border-dashed border-border p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              No reviews yet
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              Be the first tester to rate this product and share what you
              think.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-px bg-border">
            {reviews.slice(0, 5).map((review) => (
              <article
                key={review.id}
                className="bg-surface p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < review.overall_rating
                            ? "text-accent"
                            : "text-border"
                        }
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}

                    <span className="ml-2 font-mono text-xs text-muted">
                      {review.overall_rating}/5
                    </span>
                  </div>

                  <time
                    dateTime={review.created_at}
                    className="font-mono text-[10px] uppercase tracking-wider text-muted"
                  >
                    {new Date(review.created_at).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </time>
                </div>

                {review.feedback && (
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground">
                    “{review.feedback}”
                  </p>
                )}

                {review.would_use !== null && (
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted">
                    Would use:{" "}
                    <span className="text-accent-dark">
                      {review.would_use ? "Yes" : "Maybe"}
                    </span>
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
