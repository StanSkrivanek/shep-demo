			<!-- Trainings -->
			{#if upcomingTrainings.length == 0}
				<div class="no-course">
					<div class="content">
						<p>
							We are sorry but currently there are no open SHEP courses open for applications in our
							facilities.
						</p>
						<p>
							You can sign to our newsletter to be notified when new Shep courses will open for
							applications.
						</p>
					</div>
					<div class="nlr-link">
						<div class="dots">
							<DotsCorner width={24} height={24} currentColor="#f58585"/>
						</div>
						<div>
							<p>Sign to newsletter</p>
							<a href="/newsletter">
								<LinkCircle width={48} height={48} />
							</a>
						</div>
					</div>
				</div>
			{:else}
 				<div class="accordion">
					{#each upcomingTrainings as training, i}
						<div
							class="accordion_item card"
							role="button"
							tabindex={i}
							on:click={() => toggleActive(i)}
							on:keydown={() => toggleActive(i)}
						>
							<div class="accordion-header">
								<div class="data">
									<div class="location">
										<a class="accordion-header--link" href="../trainings/{training.training.slug.current}"
											>{training.training.title}</a
										>
										<p>{training.training.type}</p>
										<p>{monthNameDateYear(training.in_person.start_date)}</p>
										<p>{formatTime12(training.in_person.start_date)}</p>
									</div>
								</div>
								<div class="link-icon" class:rotate={show == i}>
									<ArrowOpen width={48} height={48} />
								</div>
							</div>
							{#if show == i}
								<div class="body accordion-body" transition:slide>
									<div class="detail">
										<!-- header -->
										<div class="detail-header">
											<p class="back-underline-tilt">In Person</p>
											<!-- <p>refNo: {training.in_person.course_in_ref}</p> -->
										</div>
										{#if training.in_person.is_active == false}
											<p>Not available</p>
										{:else}
											<div class="date-group">
												<p class="small">
													{monthNameDate(training.in_person.start_date)} - {monthNameDateYear(
														training.in_person.end_date
													)}
												</p>
												<p class="small"><span class="bold">Group:</span> {training.in_person.group}</p>
											</div>
											<div class="detail-schedule">
												<p>{training.in_person.weekday}</p>
												<div>
													<span>{formatTime12(training.in_person.start_date)}</span>
													<span class="schedule-spacer">-</span>
													<span>{formatTime12(training.in_person.end_date)}</span>
												</div>
											</div>
											<!-- trainers list -->
											<div class="detail-leader">
												<p>
													<span class="bold">Leaded by:</span>
													<!-- {#each training.in_person.leader as leader}
														{#if leader != training.in_person.leader[training.in_person.leader.length - 1]}
															<span>{leader.name}, </span>
														{:else}
															<span>{leader.name}</span>
														{/if}
													{/each} -->
												</p>
											</div>
											<!-- footer - week day & time-->
										{/if}
									</div>

									{#if training.online.is_active == false}
										<!-- <p>We do not currently offer an online version for this course.</p> -->
										<p />
									{:else}
										<div class="detail">
											<!-- header -->
											<div class="detail-header">
												<p class="back-underline-tilt">Online</p>
												<!-- <p>refNo: {training.in_person.course_in_ref}</p> -->
											</div>
											{#if training.online.is_active == false}
												<p>Not available</p>
											{:else}
												<div class="date-group">
													<p class="small">
														{monthNameDate(training.online.start_date)} - {monthNameDateYear(
															training.online.end_date
														)}
													</p>
													<p class="small"><span class="bold">Group:</span> {training.online.group}</p>
												</div>
												<div class="detail-schedule">
													<p>{training.online.weekday}</p>
													<div>
														<span>{formatTime12(training.online.start_date)}</span>
														<span class="schedule-spacer">-</span>
														<span>{formatTime12(training.online.end_date)}</span>
													</div>
												</div>
												<!-- trainers list -->
												<div class="detail-leader">
													<p>
														<span class="bold">Leaded by:</span>
														{#each training.online.leader as leader}
															{#if leader != training.online.leader[training.online.leader.length - 1]}
																<span>{leader.name}, </span>
															{:else}
																<span>{leader.name}</span>
															{/if}
														{/each}
													</p>
												</div>
												<!-- footer - week day & time-->
											{/if}
										</div>
									{/if}
									<!-- TODO: responsiveness when form is narrow fold buttons in column -->
									<div class="accordion-links">
										<!-- download brochure -->
										<a href={training.form.asset} target="_blank">
											<span>download form</span>
										</a>

										<!-- apply online -->
										<a href="#" target="_blank">
											<span>apply online</span>
										</a>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}