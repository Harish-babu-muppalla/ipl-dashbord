package com.IPL_Dashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.IPL_Dashboard.Repository.MatchRepository;
import com.IPL_Dashboard.Repository.TeamRepository;
import com.IPL_Dashboard.model.Team;

@RestController
public class TeamController {
	
	
	private TeamRepository teamRepo;
	private MatchRepository matchRepo;
	
	@Autowired
	public TeamController(TeamRepository teamRepo, MatchRepository matchRepo) {
		this.teamRepo = teamRepo;
		this.matchRepo = matchRepo;
	}



	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team =  this.teamRepo.findByTeamName(teamName);
		team.setMatches( this.matchRepo.findLatestMatchesbyTeam(teamName, 4));
		return team;
	}
	
	

}
